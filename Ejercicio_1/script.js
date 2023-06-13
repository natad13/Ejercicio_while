let numero = prompt(`Ingrese un numero`);
let multiplo = 1;
let numeros = [];





while (multiplo <= numero) {
   
    let divi = multiplo % 5;
    

    if ( divi == 0){
        
        
        numeros.push(multiplo);
    }
    multiplo = multiplo + 1 

}

document.write(` <h1> Los multiplos son de 5 : ${numeros} </h1>`)