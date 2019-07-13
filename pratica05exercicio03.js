function somar () {
				var n1 = document.getElementById ("primeiroNumero").value;
				//var n2 = document.getElementById ("segundoNumero").value;
				var soma = parseInt (n1) % 2;
				var par = 'O número digitado é par';
				var impar = 'O número digitado é impar';
				if (soma == 0) {
					document.getElementById ("soma").innerHTML = par;
					//alert('O número digitado é par!');
				} else {
					document.getElementById ("soma").innerHTML = impar;
				}
				
			}