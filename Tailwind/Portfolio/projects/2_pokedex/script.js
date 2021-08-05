// API POKEMON
const pokeContainer = document.getElementById('poke-container')
const pokemonsNumber = 50
const typeColors = {
	fire: '#FDDFDF',
	grass: '#DEFDE0',
	electric: '#f3f367',
	water: '#DEF3FD',
	ground: '#f4e7da',
	rock: '#d5d5d4',
	fairy: '#fceaff',
	poison: '#98d7a5',
	bug: '#f8d5a3',
	dragon: '#97b3e6',
	psychic: '#eaeda1',
	flying: '#F5F5F5',
	fighting: '#E6E0D4',
	normal: '#F5F5F5'
};

// Pide los pokemons a la API
const fetchPokemons = async () => {
    for(let i = 1; i <= pokemonsNumber; i++) {
        await getPokemon(i)
    }
}

// Obtiene la data del pokemon
const getPokemon = async id => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const respond = await fetch(url)
    const pokemon = await respond.json()
    
    createPokemonCard(pokemon)
}

// Crea la tarjeta de cada Pokemon
function createPokemonCard(pokemon) {
    const pokeCard = document.createElement('div')
    pokeCard.classList.add('pokemon')

    //const number = pokemon.id
    const name = pokemon.name
    const number = pokemon.id
    const type = pokemon.types[0].type.name
    const imageSource = pokemon.sprites.other['official-artwork']['front_default']
    const [hp, attack, defense] = [pokemon.stats[0].base_stat, pokemon.stats[1].base_stat, pokemon.stats[2].base_stat]
    
        const pokeInnerData = `
        <div class='img-container'>
        <img src='${imageSource}'>
        </div>

        <div class='info'>
        <span class='number'>#${number.toString().padStart(3, '0')}</span>
        <h2 class='name'>${name}</h2>
        <p class='type'>Type: <span>${type}</span></p>
        </div>

        <div class='stats'>
        <h3>Basic Stats</h3>
        <p>HP: ${hp}</p>
        <p>ATTACK: ${attack}</p>
        <p>DEFENSE: ${defense}</p>
        </div>
    `
    const color = typeColors[type]
    pokeCard.style.background = color
    pokeCard.innerHTML = pokeInnerData
    pokeContainer.appendChild(pokeCard)
}

fetchPokemons(); 