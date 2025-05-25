<?php
$host = "localhost";
$dbname = "draxgames";
$user = "root"; //
$pass = "1034282951"; // ← Deja esto vacío si no has cambiado nada en XAMPP

try {
    $conexion = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $user, $pass);
    $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Error de conexión: " . $e->getMessage());
}
?>
