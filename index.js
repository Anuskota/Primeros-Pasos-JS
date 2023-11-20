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

let myCar = {
    "name": "Renault Anuska",
    "age": 6,
    "puertas": 5,
    "deportivo": true,
    "extras": ["faros", "descapotable", "diesel"]
};

console.log(myCar.name);
console.log(myCar.extras);

/*Mostrar las propiedades mediante funciones*/

function marcaDelCoche() {
    return myCar.name;

}
console.log(marcaDelCoche());

function puertasDelCoche() {
    return myCar.puertas;
}

console.log(puertasDelCoche());

function extrasDelCoche() {
    return myCar.extras;
}

console.log(extrasDelCoche());


/*Arrays*/

let score = [6, 78, 100, -25, 0, 11, -45, 33, 0, 74];

function myScore() {
    return score;
}
console.log(myScore());

function newScore() {
    score.push(66);
    return score
}

console.log(newScore());

/*Eliminar datos de array si es par*/

function esPar() {
    let scoreArray = [];
    for (let i = 0; i < score.length; i++){
        if (i % 2 == 0) {
        score.splice[i];

        } else {
            scoreArray.push(i)
        }
        
    }
    return scoreArray;
}
console.log(esPar());

/*Array numero mayor y menor*/
let years = [6, 78, 100, -25, 0, 11, -45, 33, 0, 74];

function numeroMayor() {
    return Math.max(...years);
}
numeroMayor();
console.log(Math.max(...years));

function numeroMenor() {
    return Math.min(...years);

}
numeroMenor();
console.log(Math.min(...years));

/*Convertir una frase a Mayuscula y a Minuscula*/
let antonioMachado = "Hoy es siempre todavía, toda la vida es ahora."

function mayuscula() {
    return antonioMachado.toUpperCase();
}
mayuscula();
console.log(mayuscula());

function minuscula() {
    return antonioMachado.toLowerCase();
}

minuscula();
console.log(minuscula());

arrayGrupos = ["boikot", "reincidentes", "platero y tu", "extremoduro", "dakidarria"];

function primeraMayuscula() {
    let grupos = [];
    for (let i = 0; arrayGrupos.length; i++){
        grupos = arrayGrupos.splice()
    }
    
    return grupos;
}
primeraMayuscula();

console.log(primeraMayuscula());













