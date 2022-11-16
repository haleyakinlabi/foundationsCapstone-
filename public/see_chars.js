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

    const gender = document.createElement('div')
    gender.classList.add('gender')
    gender.innerText = character.gender

    const sex_orientation = document.createElement('div')
    sex_orientation.classList.add('sex_orientation')
    sex_orientation.innerText = character.sex_orientation

    const eye_color = document.createElement('div')
    eye_color.classList.add('eye_color')
    eye_color.innerText = character.eye_color

    const hair_color = document.createElement('div')
    hair_color.classList.add('hair_color')
    hair_color.innerText = character.hair_color

    const pt1 = document.createElement('div')
    pt1.classList.add('personality_trait')
    pt1.innerText = character.personality_trait_one

    const pt2 = document.createElement('div')
    pt2.classList.add('personality_trait')
    pt2.innerText = character.personality_trait_two

    const pt3 = document.createElement('div')
    pt3.classList.add('personality_trait')
    pt3.innerText = character.personality_trait_three

    const element = document.createElement('div')
    element.classList.add('character')
    element.appendChild(firstName)
    element.appendChild(lastName)
    element.appendChild(race)
    element.appendChild(gender)
    element.appendChild(sex_orientation)
    element.appendChild(eye_color)
    element.appendChild(hair_color)
    element.appendChild(pt1)
    element.appendChild(pt2)
    element.appendChild(pt3)
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