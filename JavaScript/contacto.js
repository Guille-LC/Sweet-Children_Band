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

const botonSubmit = document.getElementById("submitButton");

document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();
    botonSubmit.value = 'Sending...';
    const serviceID = 'default_service';
    const templateID = 'template_plfzma9';
    emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
        botonSubmit.value = 'Send Email';
            Swal.fire({
                title: "¡Formulario enviado!",
                icon: "success",
                draggable: true
            })
    });
    }, (err) => {
        botonSubmit.value = 'Send Email';
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Algo salio mal. Intentalo de nuevo."
        });;
    });















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