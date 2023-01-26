const message = 'Test Ruta Vertical Paso 3'; // Try edit me

// Update header text
document.querySelector('#header').innerHTML = message

document.getElementById('mostrar').addEventListener('click', function() {
            // let valorActivo = document.querySelector('input[name="status"]:checked').value; // Esto tiene el problema de que puede que un elemento no esté activo, entonces no se podría acceder al value de un null, lo que sería un error en tiempo de ejecución
            /*let elementoActivo = document.querySelector('input[name="p1"]:checked');
				if(elementoActivo){
					//alert(elementoActivo.value);
				} else {
					alert('No hay ninún elemento activo');
				}
				*/
				let subtotales = [];
				
				// recorrer los radio del div id grupo1
				let sum = 0;
				document.querySelectorAll('div[id="grupo1"] input[type="radio"]').forEach(element => {
					
					if(element.checked == true) {
						sum = sum + Number(element.value);
					}
				});
				console.log("total en grupo 1: "+sum);				
				let json = '{"letra":"D", "description":" -> Dominante : Franco, decisivo, organizado, extrovertido, orientado a las tareas","value":'+sum+'}';
				subtotales.push(JSON.parse(json));
				
				let sum2 = 0;
				document.querySelectorAll('div[id="grupo2"] input[type="radio"]').forEach(element => {
					
					if(element.checked == true) {
						sum2 = sum2 + Number(element.value);
					}
				});
				console.log("total en grupo 2: "+sum2);				
				
				let json2 = '{"letra":"I", "value":'+sum2+'}';
				subtotales.push(JSON.parse(json2));
				
				let sum3 = 0;
				document.querySelectorAll('div[id="grupo3"] input[type="radio"]').forEach(element => {
					
					if(element.checked == true) {
						sum3 = sum3 + Number(element.value);
					}
				});
				console.log("total en grupo 3: "+sum3);				
				
				let json3 = '{"letra":"S", "value":'+sum3+'}';
				subtotales.push(JSON.parse(json3));
				
				let sum4 = 0;
				document.querySelectorAll('div[id="grupo4"] input[type="radio"]').forEach(element => {
					
					if(element.checked == true) {
						sum4 = sum4 + Number(element.value);
					}
				});
				console.log("total en grupo 4: "+sum4);				
				
				let json4 = '{"letra":"C", "value":'+sum4+'}';
				subtotales.push(JSON.parse(json4));
				
				subtotales.sort(function(a, b) { // ordenar arreglo
				  if(a.value > b.value){
					  return 1;
				  }
				  if(a.value < b.value){
					  return -1;
				  }
				  return 0;
				});
			//console.log('La longitud es '+subtotales.length);
			//console.log('ordenado acendente es: ' + subtotales);
			subtotales.forEach(function(numero) {
				console.log(numero.value);
			});
			let r1 = subtotales[3];
			let r2 = subtotales[2];
			console.log("Tu personalidad es: "+r1.letra+ " y " +r2.letra);
			document.querySelector('#resultado').innerHTML = "En hora buena, tu personalidad es: "+r1.letra + r1.description+ " y " +r2.letra;
			
});

// Log to console
console.log(message)
