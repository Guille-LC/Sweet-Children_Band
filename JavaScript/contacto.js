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




let userEmail = document.getElementById("exampleInputEmail1");
userEmail.onchange = () => {
    localStorage.setItem("correo", userEmail.value);
    let correoGuardado = localStorage.getItem("correo");
    console.log(correoGuardado);
};

let mensaje = document.getElementById("mensaje");
mensaje.addEventListener("change", () => {
    console.log(mensaje.value);
});

const botonSubmit = document.getElementById("submitButton");

document.getElementById("formulario").addEventListener("submit", function (event) {
    event.preventDefault();
    const serviceID = "default_service";
    const templateID = "template_plfzma9";

    botonSubmit.value = "Sending...";

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            botonSubmit.value = "Send Email";
            Swal.fire({
                title: "¡Formulario enviado!",
                icon: "success",
                draggable: true
            });
        })
        .catch((err) => {
            botonSubmit.value = "Send Email";
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Algo salió mal. Inténtalo de nuevo."
            });
        });
});
