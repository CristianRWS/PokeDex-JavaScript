const getPokemonUrl = id => `https://pokeapi.co/api/v2/pokemon/${id}`
const fetchPokemon = () => {
    const generatePokemonPromises = () => Array(150).fill().map((_, index) =>
        fetch(getPokemonUrl(index + 1)).then(response => response.json()))
    
   const pokemonPromises = generatePokemonPromises()

    Promise.all(pokemonPromises)
        .then(pokemons => {
          //  console.log(pokemons)

            const lisPokemons = pokemons.reduce((accumulator, pokemon) => {
                const types = pokemon.types.map(typeInfo => typeInfo.type.name)
                
                accumulator += `
                <li class="card ${types[0]}">
                <img class="card-image" alt="${pokemon.name}" src="https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png"/>
                <h2 class="card-tittle">${pokemon.id}. ${pokemon.name}</h2>
                <p class="card-subtittle">${types.join(' | ')}</p>
                </li>
                `
                return accumulator
            }, '')
            
            const ul = document.querySelector('[data-js="pokedex"')

            ul.innerHTML = lisPokemons
        })
}

fetchPokemon()


//Get the button:
mybutton = document.getElementById("myBtn");
mybutton2 = document.getElementById("myBtn2");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
      mybutton2.style.display = "block";
  } else {
      mybutton.style.display = "none";
      mybutton2.style.display = "none";
  }

}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
function bottonFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 1000000; // For Chrome, Firefox, IE and Opera
  }