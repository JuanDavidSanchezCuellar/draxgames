<?php
require 'conexion.php';
header('Content-Type: application/json');

$accion = $_POST['accion'] ?? '';

try {
    if ($accion === 'agregar') {
        $juego = $_POST['juego'] ?? null;
        $comentario = $_POST['comentario'] ?? null;
        $usuario = $_POST['usuario_id'] ?? null;

        if (!$juego || !$comentario || !$usuario) {
            echo json_encode(["ok" => false, "error" => "Faltan datos"]);
            exit;
        }

        $stmt = $conexion->prepare("INSERT INTO comentarios (juego_id, user_id, comentario) VALUES (?, ?, ?)");
        $stmt->execute([$juego, $usuario, $comentario]);

        echo json_encode(["ok" => true]);
        exit;
    }

    if ($accion === 'listar') {
        $juego = $_POST['juego'] ?? null;

        if (!$juego) {
            echo json_encode(["ok" => false, "error" => "Falta ID del juego"]);
            exit;
        }

        $stmt = $conexion->prepare("
            SELECT c.comentario, c.fecha, u.nombre 
            FROM comentarios c
            JOIN users u ON c.user_id = u.id
            WHERE c.juego_id = ?
            ORDER BY c.fecha DESC
        ");
        $stmt->execute([$juego]);
        $comentarios = $stmt->fetchAll(PDO::FETCH_ASSOC);

        echo json_encode($comentarios);
        exit;
    }

    echo json_encode(["ok" => false, "error" => "Acción inválida"]);
} catch (Exception $e) {
    echo json_encode(["ok" => false, "error" => $e->getMessage()]);
}
