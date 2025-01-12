const botonSubmit = document.getElementById("submitButton");

//Se guarda el email en una variable y se escucha el evento input cuando el usuario escribe en el campo
let userEmail = document.getElementById("exampleInputEmail1");
userEmail.onchange = () => {console.log(userEmail.value)};

localStorage.setItem("correo", userEmail.value); //No guarda el valor. Hay un error...
let correoGuardado = localStorage.getItem("correo");
console.log(correoGuardado);


//Pero es mejor con onchange para que no se actualize a cada rato porque es innecesario
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