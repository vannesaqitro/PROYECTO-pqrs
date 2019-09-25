<?php 
	
	include('conexion.php');

	if(isset($_POST['nombre'])){
		$nombre = $_POST['nombre'];
		$correo =$_POST['correo'];
		$mensaje = $_POST['mensaje'];
		$query = "INSERT into ingresados(nombre, correo, comentario) VALUES ('$nombre','$correo','$mensaje')";
		$result= mysqli_query($connection, $query);
		if (!$result) {
			die('la consulta a fallado');
		}
		echo 'agregado satisfactoriamente';
	}

 ?>