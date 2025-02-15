fetch("./data.json")
    .then(response => response.json())
    .then(data => {
        console.log("Datos recibidos:", data); // Verifica que el JSON se cargue correctamente

        // Asegurarse de que `fechas` existe y es un array
        if (!data.fechas || !Array.isArray(data.fechas)) {
            console.error("Error: La propiedad 'fechas' no existe o no es un array", data);
            return;
        }

        const listaFechas = document.getElementById("lista-fechas");
        listaFechas.innerHTML = ""; // Limpia antes de agregar

        data.fechas.forEach(evento => {
            const li = document.createElement("li");
            li.innerHTML = `<strong>${evento.date}</strong> - ${evento.place} 
                            <a href="${evento.link}" target="_blank">Comprar entradas</a>`;
            listaFechas.appendChild(li);
        });
    })
    .catch(error => console.error("Error al cargar los datos:", error));




//async function pokemonApi(pokemon) {
//    const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
//    console.log(respuesta)
//};
//pokemonApi("pikachu");
//
//async function pokemonApi(pokemon) {
//    const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
//    console.log(respuesta)
//};
//pokemonApi("blastoise");
//
//async function pokemonApi(pokemon) {
//    const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
//    console.log(respuesta)
//};
//pokemonApi("hitmonchan");