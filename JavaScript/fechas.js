const contenedorDeFechas = document.getElementById("contenedorDeFechas");

const fechas = [
    {
        id:1,
        date:"31/8",
        place:"The Roxy Live, Cnel. Niceto Vega 5542",
        link:"https://www.ticketek.com.ar/"
    },

    {
        id:2,
        date:"7/09",
        place: "The Sub Club, Av. Córdoba 543",
        link:"https://home.passline.com/home"
    },

    {
        id:3,
        date:"14/09",
        place: "Melonio Bar, Montevideo 175",
        link:"https://entradauno.com/"
    },

    {
        id:4,
        date:"21/09",
        place: "VOX, Av. Hipólito Yrigoyen 968",
        link:"https://entradauno.com/"
    },

    {
        id:5,
        date:"4/10",
        place: "Movistar Arena, Av. Corrientes 6094",
        link:"https://www.movistararena.com.ar/"
    },

    {
        id:6,
        date:"10/11",
        place:"El Emergente Bar, Gallo 333",
        link:"https://www.allaccess.com.ar/"
    }
];

fechas.forEach(fecha => {
    contenedorDeFechas.innerHTML += `
        <div class="datebox">
            <ul style="list-style: none">
                <li>${fecha.date}</li>
                <li>${fecha.place}</li>
                <li><a class="shop" href=${fecha.link} target="_blank">Comprar</a></li>
            </ul>
        </div>
    `
});