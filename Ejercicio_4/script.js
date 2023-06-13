
let numeros = [];
let continuar = 1;



while (continuar !=0 ) {
   let ingreso = prompt(`Ingrese una letra o palabra`);
    console.log ((ingreso))   
     
    if (isNaN(ingreso) == true ) {
            if (ingreso != "" ) {
                numeros.push(ingreso);

                    
            } 
        }
    if (ingreso == ""){         
        continuar= 0;
        document.write (`<h1> Gracias por utilizar la aplicacion </h1>` )
        document.write (`<h1>${numeros} </h1>` )        
    }
    
} 
 

              
 

