fetch("/package.json")
    .then(datos => datos.json())
    .then(datos => console.log(datos));


async function pokemonApi(pokemon) {
    const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    console.log(respuesta)
};
pokemonApi("pikachu");

async function pokemonApi(pokemon) {
    const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    console.log(respuesta)
};
pokemonApi("blastoise");

async function pokemonApi(pokemon) {
    const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    console.log(respuesta)
};
pokemonApi("hitmonchan");