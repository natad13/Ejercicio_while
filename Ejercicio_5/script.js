
let numeros = [];
let continuar = 1;



while (continuar !=0 ) {
    let ingreso = prompt(`Ingrese un dia de la semana`).toLocaleUpperCase();
    console.log ((ingreso))   
     
    if (ingreso == "LUNES" ) {
        alert(`Ten un Lindo inicio de Semana` )
        }

    else if (ingreso == "MARTES" ) {
        alert (`Quedan 5 dias para descansar` )
        }
        
    else if (ingreso == "MIERCOLES" ) {
        alert(` Quedan 4 dias para descansar` )
    }   

    else if (ingreso == "JUEVES" ) {
        alert(`Quedan 3 dias para descansar` )
        }
        
    else if (ingreso == "VIERNES" ) {
        alert (`Quedan 2 dias para descansar` )
    } 
    
    
    else if (ingreso == "SABADO" ) {
        alert(`Quedan 1 dias para descansar` )
        }
        
    else if (ingreso == "DOMINGO" ) {
        alert (`VE A DESCANSAR !!!` )
        continuar= 0;
    } 
    
} 
 

              
 

