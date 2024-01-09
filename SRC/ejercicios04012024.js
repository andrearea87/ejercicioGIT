/*Usando un bucle for escribir un script que pida un valor entero y muestre en pantalla
 una lista de números desde el 0 al valor tecleado. Los números se separarán por comas. */


 /*let numero = parseInt(prompt("Deme un numero entero"));
 if(!isNaN(numero)){  
    console.log("modulo "+numero % 1) ;
    if (numero % 1 === 0) {
            //Es un numero entero
            for(let i=0;i<=numero;i++){
                console.log(i+",");
            }
    } else {
            alert ("Es un numero decimal");
    }     
 }else{
 alert ("No es un numero");}*/


 /*Se trata de que dado un número entero el script muesre una cuenta atrás, 
 es decir, una lista de numeros separados por coma desde el número tecleado hasta el 0.*/
/*
 let numero2 = parseInt(prompt("Deme un numero entero"));
 if(!isNaN(numero2)){  
   // console.log("modulo "+numero % 1) ;
    if (numero2 % 1 === 0) {
            //Es un numero entero
            for(let j=numero2;j>=0;j--){
                console.log(j+",");
            }           
    } else {
            alert ("Es un numero decimal");
    }     
 }else{
    alert ("No es un numero");
 }
*/
 /*Se trata de dibujar un triángulo con asteriscos. El usuario tecleará un valor entero, el programa escribirá con asteriscos tantas lineas como diga ese número. Cada linea estará formada por una serie de astericos tan larga como diga el número de línea en el que está.

Para separar una linea de la siguiente en console o en alert debes usar "\n". En este ejercicio usa console.log.*/


let numero3 = parseInt(prompt("Deme un numero entero"));
let cadena="";
let asterisco="";
if(!isNaN(numero3)){  
  // console.log("modulo "+numero % 1) ;
   if (numero3 % 1 === 0) {
           //Es un numero entero
           for(let k=1;k<=numero3;k++){
                for(let h=1;h<=k;h++){
                    asterisco+="*";
                }
                console.log(asterisco+"\n");
                asterisco="";
           }
   } else {
           alert ("Es un numero decimal");
   }     
}else{
   alert ("No es un numero");
}


