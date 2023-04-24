const message = 'Test de dones y talentos'; // Try edit me

// Update header text
document.querySelector('#header').innerHTML = message;

document.getElementById('mostrar').addEventListener('click', function() {
	let jsonDones = [{"don":"Administración","puntaje":null},
					{"don":"Apostolado","puntaje":null},
					{"don":"Artesanía","puntaje":null},
					{"don":"Discernimiento","puntaje":null},
					{"don":"Evangelismo","puntaje":null},
					{"don":"Exhortación","puntaje":null},
					{"don":"Fe","puntaje":null},
					{"don":"Dar","puntaje":null},
					{"don":"Sanidad","puntaje":null},
					{"don":"Ayudar","puntaje":null},
					{"don":"Hospitalidad","puntaje":null},
					{"don":"Intercesión","puntaje":null},
					{"don":"Conocimiento","puntaje":null},
					{"don":"Liderazgo","puntaje":null},
					{"don":"Misericordia","puntaje":null},
					{"don":"Milagros","puntaje":null},
					{"don":"Misiones","puntaje":null},
					{"don":"Música/Adoración","puntaje":null},
					{"don":"Pastor","puntaje":null},
					{"don":"Profecía","puntaje":null},
					{"don":"Servicio","puntaje":null},
					{"don":"Enseñanza","puntaje":null},
					{"don":"Lenguas","puntaje":null},
					{"don":"Sabiduría","puntaje":null}];
            // let valorActivo = document.querySelector('input[name="status"]:checked').value; // Esto tiene el problema de que puede que un elemento no esté activo, entonces no se podría acceder al value de un null, lo que sería un error en tiempo de ejecución
            /*let elementoActivo = document.querySelector('input[name="p1"]:checked');
				if(elementoActivo){
					//alert(elementoActivo.value);
				} else {
					alert('No hay ninún elemento activo');
				}
				*/
				let arrayRespuestas = [];
				
				// recorrer los radio del div id grupo1
				let sum = 0;
				let validar = 0; // valida si los todas las preguntas son respondidas
				console.log("// se revisan las respuestas a cada pregunta");
				document.querySelectorAll('div[id="grupo1"] input[type="radio"]').forEach(element => {
					
					if(element.checked == true) {
						arrayRespuestas.push(Number(element.value));
						//sum = sum + Number(element.value);
						console.log("valor -> " + element.value);
						validar = validar + 1;
					}
				});
				
				/*sumamos las respuestas correspondientes a cada fila de preguntas de acuerdo al documento test de ruta vertical.
					y llenamos el arreglo que contiene las sumatorias para determinar luego cuales son los dones de mayor peso.
				*/
				

				for(i = 0; i < arrayRespuestas.length; i++){					
					let j = i + 24;										
					let k = j + 24;
					if (i <= 23){
						sum = Number(arrayRespuestas[i]) + Number(arrayRespuestas[j]) + Number(arrayRespuestas[k]);
						jsonDones[i].puntaje = sum;
						//console.log("La suma es : " + sum);
					}
					
				};

				jsonDones.forEach(datos =>{// se recorren y muestran las sumatorias las cuales ya se encuentran en el formato json
					console.log(datos);
				});
				
				function sortJSON(data, key, orden) { // ordenamos el json por una de sus propiedades (puntaje) descendentemente
					return data.sort(function (a, b) {
						var x = a[key],
						y = b[key];
				
						if (orden === 'asc') {
							return ((x < y) ? -1 : ((x > y) ? 1 : 0));
						}
				
						if (orden === 'desc') {
							return ((x > y) ? -1 : ((x < y) ? 1 : 0));
						}
					});
				}

				var oJSON = sortJSON(jsonDones, 'puntaje', 'desc'); // se invoca la función de ordenamiento del objeto json
				

				// Pintamos en pantalla el JSON ordenado
				console.log("// Pintamos en pantalla el JSON ordenado \n" + JSON.stringify(oJSON));

				for(i = 0; i < 5; i++){ // se muestran los primeros 5 dones
					if (i <= 5){
						console.log("el don es : " + oJSON[i].don);
					}					
				};				
				
			
			if(validar == 72){
				document.querySelector('#resultado').innerHTML = "En hora buena, tus dones y respectivo puntaje son: "
					+ oJSON[0].don + " --> " + oJSON[0].puntaje + ", "
					+ oJSON[1].don + " --> " + oJSON[1].puntaje + ", "
					+ oJSON[2].don + " --> " + oJSON[2].puntaje + ", "
					+ oJSON[3].don + " --> " + oJSON[3].puntaje + " y "
					+ oJSON[4].don + " --> " + oJSON[4].puntaje;
				//document.querySelector('#resultado').innerHTML = "Todas las opciones han sido seleccionados";
			}else{
				alert("Recuerde que debe responder todos los items");
			}
			
});

// Log to console
console.log(message)
