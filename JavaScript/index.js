fetch("./data.json")
    .then(response => response.json())
    .then(data => {
        console.log("Datos recibidos:", data);

        if (!data.fechas || !Array.isArray(data.fechas)) {
            console.error("Error: La propiedad 'fechas' no existe o no es un array", data);
            return;
        }

        const listaFechas = document.getElementById("lista-fechas");
        listaFechas.innerHTML = "";

        data.fechas.forEach(evento => {
            const li = document.createElement("li");
            li.innerHTML = `<strong>${evento.date}</strong> - ${evento.place} 
                            <a href="${evento.link}" target="_blank">Comprar entradas</a>`;
            listaFechas.appendChild(li);
        });
    })
    .catch(error => console.error("Error al cargar los datos:", error));