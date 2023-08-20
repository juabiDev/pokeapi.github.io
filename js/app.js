document.addEventListener("DOMContentLoaded",init);

const URL_ALL_POKEMONS = `https://pokeapi.co/api/v2/pokemon?limit=100&offset=0`;
const pokemonsSection = document.getElementById("pokemons-section");

function init() {
    pokedex();
}

function pokedex() {
    getAllPokemons();
    getPokemon();
    filterPokemonsType();
}

async function getAllPokemons() {
    pokemonsSection.innerHTML = "";
    
    const response = await fetch(URL_ALL_POKEMONS);
    const data = await response.json();
    const pokemons = data.results;
    
    pokemons.forEach(pokemon => {
        fetch(pokemon.url)
            .then(response => response.json())
            .then(data => {
                const cardPokemon = pokemonCard(data.name, data.sprites.back_default, data.abilities[0].ability.name)
                pokemonsSection.innerHTML += cardPokemon;
            })
    })
}

function filterPokemonsType() {
    const contenedorFiltros = document.getElementById("filter");
    for(let i = 0; i < contenedorFiltros.children.length; i++) {
        contenedorFiltros.children[i].addEventListener("click", filterPokemons);
    }
}

function filterPokemons(event) {
    const filterType = event.target.id;
    getPokemonsFromType(filterType)
}

async function getPokemonsFromType(type) {
    pokemonsSection.innerHTML = "";

    const URL_TYPE = {
        "filter-fire": "https://pokeapi.co/api/v2/type/10/",
        "filter-water": "https://pokeapi.co/api/v2/type/11/",
        "filter-ghost": "https://pokeapi.co/api/v2/type/8/",
        "filter-flayer": "https://pokeapi.co/api/v2/type/3/",
        "filter-psyquic": "https://pokeapi.co/api/v2/type/14/"
    }

    const response = await fetch(URL_TYPE[type]);
    const data = await response.json();
    const pokemons = data.pokemon;

    pokemons.forEach(pokemon => {
        fetch(pokemon.pokemon.url)
            .then(response => response.json())
            .then(data => {
                const cardPokemon = pokemonCard(data.name, data.sprites.back_default, data.abilities[0].ability.name)
                pokemonsSection.innerHTML += cardPokemon;
            })
    })
}

function getPokemon() {
    const input = document.getElementById("search");
    input.addEventListener("keyup", (e) => {
        let textoInput = e.target.value;
        textoInput = textoInput.toLowerCase();
        if(textoInput !== "") {
            searchPokemon(textoInput) 
            return;
        }
        
        getAllPokemons()
    });
}

async function searchPokemon(name) {
    pokemonsSection.innerHTML = "";
    console.log("hola");
    
    const URL = `https://pokeapi.co/api/v2/pokemon/${name}`
    const response = await fetch(URL);

    if(!response.ok) return

    const data = await response.json();
    const namePokemon = data.name;
    const imagePokemon = data.sprites.back_default;
    const abilityPokemon = data.abilities[0].ability.name;
    
    const cardPokemon = pokemonCard(namePokemon, imagePokemon, abilityPokemon)

    pokemonsSection.innerHTML = cardPokemon;
    
}

function pokemonCard(name, image, ability) {
    const cardPokemon = `
        <div id="${name}" class="pokemon-card">
            <img src=${image} alt="${name} Pokemon Image">
            <h3>${name}</h3>
            <p>Ability: ${ability}</p>
        </div>
    `;

    return cardPokemon
}


