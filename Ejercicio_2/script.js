let numero1 = prompt(`Ingrese un numero`);
let numero2 = prompt(`Ingrese un numero`);
let contador = 1;
let numeros = [];
let indice = 0;
document.write(`<h2> SIRVE <\h2>`);



while (contador <= 50) {
    numeros.push(contador);
    contador = contador + 1 
}

if ( numero1 >= 1 && numero1 <= 50 && numero2 >= 1 && numero2 <= 50  ) {
    while (indice <= 49){
        if (numeros [indice] == numero1 | numeros [indice] == numero2  ) {
            console.log("LOTERIA")   
        }
        else{
            console.log(numeros [indice])
        }
        indice =indice+1
    
    }
}
else{
    console.log(`Los numeros ingresados son incorrectos`)
}