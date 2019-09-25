 <?php 

		include('conexion.php');
		$search = $_POST['search'];

		if (!empty($search)) {
		$query = "SELECT * FROM ingresados WHERE nombre LIKE '$search%'";
		$result = mysqli_query($connection, $query);
		if (!$result) {
			die('Error de consulta'. mysqli_error($connection));
		}
		$json = array();
		while ($row = mysqli_fetch_array($result)) {
			$json[]= array(
				'id'=> $row['id'],
				'nombre'=> $row['nombre'],
				'correo' => $row ['correo'],
				'comentario' => $row['Comentario']

				);  
		}

		$jsonstring = json_encode($json);
		echo $jsonstring;
}
 ?>