const characterContainer = document.querySelector('#characters-container')

function getCharacter(id) {
    axios.get(`http://localhost:5500/character/${id}`)
        .then(res => {
          const character = res.data[0]
          characterContainer.innerText = JSON.stringify(character)   
        })
}

function getCharacters() {
    axios.get(`http://localhost:5500/characters`)
        .then(res => {
          const characters = res.data
          characterContainer.innerText = JSON.stringify(characters)   
        })
}


function initCharacters () {
    let characterId = location.hash.slice(1)

    if (characterId.length) {
        getCharacter(characterId)
    } else {
        getCharacters()
    }
}

setTimeout(initCharacters, 100)