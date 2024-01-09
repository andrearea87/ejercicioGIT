let nombreAlumno = prompt("Ingrese el nombre del Alumno");
let materia = prompt("Ingrese la materia");
let nota1 = parseInt(prompt("Ingrese la Nota 1"));
let nota2 = parseInt(prompt("Ingrese la Nota 2"));
let nota3 = parseInt(prompt("Ingrese la Nota 3"));
let promedio=0;
//Verificar que las notas sean numeros
if(!isNaN(nota1) && !isNaN(nota2) && !isNaN(nota3)){ 
    if((nota1>=0 && nota1<=10) && (nota2>=0 && nota2<=10) && (nota3>=0 && nota3<=10)){ 
        promedio=(nota1+nota2+nota3)/3;
        if(promedio>=7){
            alert(nombreAlumno+" Felicidades, has aprobado con un promedo de "+promedio);
        }else{
            alert(nombreAlumno+" Gracias por tu esfuerzo, nos vemos pronto en clase. El promedio es "+promedio);
        }

    }else{
        alert("Las notas no cumplen el rango valido de 0 a 10, por favor revise los valores");
    }

}
else{
    alert("Existe un error en las notas ingresadas, por favor verifique que los datos sean correctos");
}