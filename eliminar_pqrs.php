<?php 

	include('conexion.php');

	if (isset($_POST['id'])) {

		$id = $_POST[ 'id'];

		$query= "DELETE FROM ingresados WHERE id = $id";
		$result = mysqli_query($connection, $query);
		if (!$result) {
				die('consulta fallida');
		}
		echo "Pqrs Eliminado";
	}

 ?>