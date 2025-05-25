    <?php
require 'conexion.php';

$nombre = $_POST['nombre'];
$correo = $_POST['correo'];
$contrasena = password_hash($_POST['contrasena'], PASSWORD_DEFAULT);

$stmt = $conexion->prepare("INSERT INTO users (nombre, correo, contrasena) VALUES (?, ?, ?)");
$stmt->execute([$nombre, $correo, $contrasena]);

echo "Usuario registrado correctamente. <a href='login.html'>Iniciar sesión</a>";
