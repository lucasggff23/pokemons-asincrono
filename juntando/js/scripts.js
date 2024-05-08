

const grupoGrama = ["bulbasaur","venusaur","ivysaur"]
const grupoFogo = ["charmander","charmeleon","charizard"]


function carregarPokemons(){

    fetch("https://pokeapi.co/api/v2/pokemon?limit=10000")
    .then(function response(data){

        const promlsData = data.json()
        console.log(promlsData)

        promlsData.then(response =>{
        pokemons = response.results

        for( let index = 0 ; index < pokemons.length; index ++){
            const pokemon = pokemons[index]
            const id = index + 1
            pokemon.imagem = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" + id +".png"
            adicionarCardPokemon(pokemon)
        }
        })
   })

    
}

function adicionarCardPokemon(pokemon){

    const divCardElemento = document.createElement("div")
    divCardElemento.classList.add("card")

    const imagemElemento = document.createElement("img")
    imagemElemento.setAttribute("src", pokemon.imagem)
    imagemElemento.style.width="90%"

    const textoElemento = document.createElement("h1")
    textoElemento.innerHTML = pokemon.name

   /* if(grupoGrama.includes(pokemon.name)){
        textoElemento.classList.add("grama")
    } else if(grupoFogo.includes(pokemon.name)){
        textoElemento.classList.add("fogo")
    } */
   
    const divElemento = document.getElementById("conteudo-pokemon")

    divCardElemento.appendChild(imagemElemento)
    divCardElemento.appendChild(textoElemento)

    divElemento.appendChild(divCardElemento)
    

}
