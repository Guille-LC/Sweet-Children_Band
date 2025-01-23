const instrumentos = [
    {
        id:1,
        tipo:"Guitarra",
        modelo:"Stratocaster",
        cuerdas: 6,
        cableIncluido: true
    },
    {
        id:2,
        tipo:"Bajo",
        modelo:"Fender",
        cuerdas: 4,
        cableIncluido: false
    },
    {
        id:3,
        tipo:"Bateria",
        modelo:"Zidjan",
        cuerdas: 0,
        cableIncluido: false
    }
];

const mostrarInstrumentos = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(instrumentos),
            reject("Error")
        }, 3000)
    })
};

console.log(mostrarInstrumentos());

let botonComprar = document.querySelectorAll(".shop");

const promesaFutura = (respuesta) => {
    return new Promise((resolve,reject) => {
        respuesta ? resolve("Promesa cumplida") : reject("Promesa rechazada")
    })
};

console.log(promesaFutura(true));
console.log(promesaFutura(false));

