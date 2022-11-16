const characterContainer = document.querySelector('#characters-container')
const randomCharBtn = document.querySelector('#randomCharBtn')

function buildCharacterElement (character) {
    const firstName = document.createElement('div')
    firstName.classList.add('first-name')
    firstName.innerText = character.first_name

    const lastName = document.createElement('div')
    lastName.classList.add('last-name')
    lastName.innerText = character.last_name

    const race = document.createElement('div')
    race.classList.add('race')
    race.innerText = character.race

    const element = document.createElement('div')
    element.classList.add('character')
    element.appendChild(firstName)
    element.appendChild(lastName)
    element.appendChild(race)
    return element
}

function getCharacter(id) {
    axios.get(`http://localhost:5500/character/${id}`)
        .then(res => {
          const character = res.data[0]
          const element = buildCharacterElement(character)
          characterContainer.appendChild(element)
          //characterContainer.innerText = JSON.stringify(character)   
        })
}

function getCharacters() {
    axios.get(`http://localhost:5500/characters`)
        .then(res => {
          const characters = res.data
          characters.forEach(character => {
            const element = buildCharacterElement(character)
            characterContainer.appendChild(element)
            //const divider = document.createElement('hr')
            //characterContainer.appendChild(divider)
          })
          //characterContainer.innerText = JSON.stringify(characters)   
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