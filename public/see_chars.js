const characterContainer = document.querySelector('#characters-container')
const randomCharBtn = document.querySelector('#randomCharBtn')

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

function loadAnotherRandomCharacter () {
    window.location = `/see_chars.html?seed=${Math.random()}#random`  
}

setTimeout(initCharacters, 100)
randomCharBtn.addEventListener('click', loadAnotherRandomCharacter)