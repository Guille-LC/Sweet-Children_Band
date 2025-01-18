const botonSubmit = document.getElementById("submitButton");

let userEmail = document.getElementById("exampleInputEmail1");
userEmail.onchange = () => {
    localStorage.setItem("correo", userEmail.value);
    let correoGuardado = localStorage.getItem("correo");
    console.log(correoGuardado);
};

let mensaje = document.getElementById("mensaje");
mensaje.addEventListener("change", () => {
    console.log(mensaje.value)
});

let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", envioDeFormulario);

//Hasta que el campo de email no se llene, esta funcion no se activa. Debe ser por el required del HTML
function envioDeFormulario(x) {
    x.preventDefault();
    alert("Email recibido");
};

class Miembros {
    constructor(nombre,apellido,puesto) {
        this.nombre = nombre,
        this.apellido = apellido,
        this.puesto = puesto
    }
};

const billie = new Miembros("Billie Joe","Armstrong","Cantante y guitarrista");
const mike = new Miembros("Mike","Dirnt","Bajista");
const tre = new Miembros("Tre","Cool","Baterista");

let objetoJason;
let miembrosDeLaBanda = [];

function transformarJason(obj) {
    miembrosDeLaBanda.push(obj);
    objetoJason = JSON.stringify(miembrosDeLaBanda);
    localStorage.setItem("Nombre y puesto",objetoJason);
};

transformarJason(billie);
transformarJason(mike);
transformarJason(tre);

const arrayJason = JSON.parse(localStorage.getItem("Nombre y puesto"));
console.log(objetoJason);