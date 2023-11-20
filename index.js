/*Taller JS*/

/*Variables*/

let nombre = "Ana";
let edad = 35;
let mayorEdad = 18;
let femCOder = true;
console.log(nombre);

let timepoSiendoMayorEdad = edad - mayorEdad;
console.log(timepoSiendoMayorEdad);

/*Operaciones con variables*/
let a = 25;
let b = 55;
let c = b - a;
let d = b + a;
let resto = 55 % 25;
console.log(c)
console.log(d)
console.log(resto)

/*Concatenar*/

let ciudad = "Segovia";
let pais = "España";
let domicilio = console.log(`Vivo en ${ciudad}, una provincia de ${pais} `);

/*Funciones*/

function localidad() {
    let otraCiudad = "Segovia";
    let otroPais = "España";
    return (`Vivo en ${otraCiudad}, provincia de ${otroPais}`);
}

localidad();
console.log(localidad());

function division() {
    let dividiendo = edad / mayorEdad;
    return dividiendo;
}
division();
console.log(division());

/*Funcio Par o Ipar*/
let num = 5;
function par() {
    if (num  % 2 == 0) {
        return true;
    } else {
        return false
    }

}

console.log(par(num));


/*Objetos*/







