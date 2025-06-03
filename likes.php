<?php
require 'conexion.php';
header('Content-Type: application/json');

try {
    $accion = $_POST['accion'] ?? '';

    if ($accion === 'contar') {
        $juego = $_POST['juego'] ?? null;
        if (!$juego) {
            echo json_encode(["ok" => false, "error" => "Falta ID del juego"]);
            exit;
        }

        $stmt = $conexion->prepare("SELECT tipo, COUNT(*) as total FROM likes WHERE juego_id = ? GROUP BY tipo");
        $stmt->execute([$juego]);
        $resultados = $stmt->fetchAll(PDO::FETCH_ASSOC);

        $resumen = ["like" => 0, "dislike" => 0];
        foreach ($resultados as $row) {
            $resumen[$row['tipo']] = $row['total'];
        }

        echo json_encode(["ok" => true, "likes" => $resumen]);
        exit;
    }

    $usuario = $_POST['usuario_id'] ?? null;
    $juego = $_POST['juego'] ?? null;
    $tipo = $_POST['tipo'] ?? null;

    if (!$usuario || !$juego || !$tipo) {
        echo json_encode(["ok" => false, "error" => "Faltan datos"]);
        exit;
    }

    $stmt = $conexion->prepare("DELETE FROM likes WHERE user_id = ? AND juego_id = ?");
    $stmt->execute([$usuario, $juego]);

    $stmt = $conexion->prepare("INSERT INTO likes (user_id, juego_id, tipo) VALUES (?, ?, ?)");
    $stmt->execute([$usuario, $juego, $tipo]);

    echo json_encode(["ok" => true]);
} catch (Exception $e) {
    echo json_encode(["ok" => false, "error" => $e->getMessage()]);
}