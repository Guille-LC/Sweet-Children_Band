async function obtenerBioGreenDay() {
    try {
        const respuesta = await fetch(
            "https://es.wikipedia.org/api/rest_v1/page/summary/Green_Day"
        );
        if (!respuesta.ok) {
            throw new Error("No se pudo obtener la información.");
        }
        const data = await respuesta.json();
        const bioElement = document.getElementById("bio-green-day");
        if (bioElement) {
            bioElement.innerHTML = `<p class="greendaybio">${data.extract}</p>`;
        } else {
            console.error("No se encontró el elemento con ID 'bio-green-day'.");
        }
    } catch (error) {
        console.error("Error al obtener la biografía:", error);
    }
}

obtenerBioGreenDay();