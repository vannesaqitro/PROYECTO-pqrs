$(document).ready(function(){
	listar();
	$('#resultadoBusqueda').hide(); //seleccionar elemento resultadoBusqueda y se oculta

	$('#search').keyup(function(e){
		if($('#search').val()){
			let search = $('#search').val();
			console.log(search);	
			$.ajax({
				url: 'union.php',
				data: {search}, //enviar valor del input al servidor
       			type: 'POST', 
				success: function (response) {
				 	let ingresadoss = JSON.parse(response);
				 	let template = '';

					 ingresadoss.forEach(ingresado => {
				 		template += 
				 		`<li> ${ingresado.nombre} </li> ` //va a obtener el nombre del servidor, recogiendolas y mostrandolas en lista
					 });
					 //selecciona el id container y pongale los datos del template
					  $('#container').html(template);

					  $('#resultadoBusqueda').show();		//mostrar elemento	 
				}
			});
		}
	});

	//buscar Persona
		$('#nuevos-pqrs').submit(function (e){
			const postData = {
				nombre: $('#nombre').val(),
				correo: $('#email').val(),
				mensaje: $('#Mensaje').val()
			};
			$.post('añadir_peticion.php', postData, function (response){
				listar();
				//resetiar formulario al añadir nueva persona
				$('#nuevos-pqrs').trigger('reset'); //resetea el formulario.
			});	

			e.preventDefault(); //hace que no se refresque la pagina.
		});
//
		function listar() {   
			$.ajax({
			url:'listar_peticion.php',
			type: 'GET',
				success: function (response){
					let ingresados = JSON.parse(response);
					let template='';
					ingresados.forEach(ingresado =>{
						console.log("datos",ingresado);
						 template += `
							<tr id_="${ingresado.id}">

								<td> ${ingresado.id} </td>
								<td> ${ingresado.nombre} </td>
								<td>${ingresado.correo} </td>
								<td>${ingresado.comentario} </td>
								<td>
									<button class="p-delete btn btn-danger">
									eliminar
									</button>
								</td>
							</tr>`
					});
					$('#tabla').html(template);
				}
			});		
		}
		
		$(document).on('click','.p-delete', function(){
			
			let element = $(this)[0].parentElement.parentElement;
			let id = $(element).attr('id_');
			$.post('eliminar_pqrs.php', {id}, function(response){
				listar();
			} )
		})
});