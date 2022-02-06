let numero1: number = Number(prompt("Ingrese el primer número"));
let numero2: number = Number(prompt("Ingrese el segungo número"));

let operacion: number = Number(
  prompt("Ingrese el tipo de operación que va a realizar puede ser para suma:1, para resta:2, para multiplicas:3 y para dividir:4")
);

function suma() {
 
    let suma: Number = numero1 + numero2;

    console.log(numero1);
    console.log("+");
    console.log(numero2);
    console.log("El resultado de la suma es " + suma);
  
}

function resta() {
 
    let resta: number = numero1 - numero2;

    console.log(numero1);
    console.log("-");
    console.log(numero2);
    console.log("El resultado de la resta es " + resta);
  
}

function multiplicar() {
  
    let multiplicar: number = numero1 * numero2;

    console.log(numero1);
    console.log("*");
    console.log(numero2);
    console.log("El resultado de la multiplicación es " + multiplicar);
  
}

function dividir() {

    let dividir = numero1 / numero2;

    console.log(numero1);
    console.log("/");
    console.log(numero2);
    console.log("El resultado de la división es " + dividir);
  }

switch (operacion) {
  case 1:
    suma()
    break;
 case 2:
    resta()
    break;
     case 3:
    multiplicar()
    break;
     case 4:
    dividir()
    break;
  default:
    break;
}