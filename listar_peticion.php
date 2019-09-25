<?php 

	include('conexion.php');

	$query = "SELECT * from ingresados";
	$result=mysqli_query($connection, $query);

	if (!$result){
		die('Consulta Fallida'. mysqli_error($connection));
	}
	$json= array();
	while ($row = mysqli_fetch_array($result)) {
		$json[] = array(
			'id'=> $row['id'],
			'nombre'=> $row['nombre'],
			'correo'=> $row['correo'],
			'comentario'=> $row['Comentario']
			);
	}
	$jsonstring = json_encode($json);
	echo $jsonstring;

 ?>