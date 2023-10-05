//RESUELVE LOS EJERCICIOS AQUÍ
const empleados = [
    { name: "Luis", email: "Luis@gmail.com" },
    { name: "Ana", email: "Ana@gmail.com" },
    { name: "Andrea", email: "Andrea@gmail.com" },
];
const [luis, ana, andrea] = empleados;

const {name, email} = luis;
const {name: nameLuis, email: emailLuis} = luis;


const {a = 5, b = 3} = {a: 3, b: 5};

const HIGH_TEMPERATURES = {
    yesterday: 30,
    today: 35,
    tomorrow: 32,
  };

  const {today, tomorrow} = HIGH_TEMPERATURES;
  const {today: maximaHoy, tomorrow: maximaManana} = HIGH_TEMPERATURES;

  //Spread
function sumEveryOther(...n) {
    let sumatorio = 0;
    for (let i = 0; i < n.length; i++) {
        sumatorio += n[i];
}
return sumatorio;
}

function addOnlyNums(...n) {
    let sumatorio = 0;
    for (let i = 0; i < n.length; i++) {
        if (typeof (n[i]) == "number") {
            sumatorio += n[i];
        }
    }   
    return sumatorio;
}

function countTheArgs(...n) {
    return n.length;
}

function combineTwoArrays(array1, array2) {
    return [...array1, ...array2];
}

function onlyUniques(...n) { 
    let array = [...n];
    let resultado = [];
    for (let i = 0; i < array.length; i++) {
        if (resultado.indexOf(array[i]) == -1) {
            resultado.push(array[i]);
        }
    }
    return resultado;
}

function combineAllArrays(...n){
    let resultado = [];
    for (i=0; i < n.length; i++){
        resultado.push(...n[i]);
    }
    return resultado;
}

function sumAndSquare(...n){
    let array = [...n];
    let resultado = array.map(n => n**2)
                        .reduce((acc,n) => acc+n);
    return resultado;
}


