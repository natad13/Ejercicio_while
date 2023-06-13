
let numeros = [];
let continuar = 1;



while (continuar !=0 ) {
    let ingreso = prompt(`Ingrese un numero`);
        if (isNaN(ingreso) == false ) {
            if (ingreso != "" ) {
                numeros.push(ingreso);
                
            }
           
            
        }
    
    continuar = prompt(`ingrese 0 si desea terminar`);

}
 
document.write (`<h1>${numeros} </h1>` )