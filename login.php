<?php
require 'conexion.php';
header('Content-Type: application/json');

$correo = $_POST['correo'];
$contrasena = $_POST['contrasena'];

$stmt = $conexion->prepare("SELECT * FROM users WHERE correo = ?");
$stmt->execute([$correo]);
$usuario = $stmt->fetch(PDO::FETCH_ASSOC);

if ($usuario && password_verify($contrasena, $usuario['contrasena'])) {

file_put_contents("debug.txt", print_r($usuario, true));

    echo json_encode([
        "ok" => true,
        "usuario" => [
            "id" => $usuario['id'],
            "nombre" => $usuario['nombre'],
            "correo" => $usuario['correo']
        ]
    ]);
} else {
    echo json_encode(["ok" => false]);
}
