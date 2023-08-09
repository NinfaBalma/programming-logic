 const t1 = true
 const t2 = true 

 console.log('Vamos comprar a tv de 50"? ' + (t1 && t2)); // AND
 console.log('Vamos comprar a tv de 32"? ', t1 !== t2 ); // XOR
 console.log('Vamos tomar sorvete?' , t1 || t2); // OR

 let tomarSorvete = t1 || t2 ;
 console.log('Vamos comprar sorvete?' , tomarSorvete);//OR

 let vamosFicarEmCasa = !tomarSorvete
 console.log('Vamos ficar em casa?' , vamosFicarEmCasa); //NOT