const form = document.querySelector('#form')



//input
const firstNameInput = document.querySelector('#fname-input')
const lastNameInput = document.querySelector('#lname-input')
const aestheticInput = document.querySelector('#aesthetic-input')

//select
const raceSelect = document.querySelector('#race-select')
const genderSelect = document.querySelector('#gender-select')
const sexOrientationSelect = document.querySelector('#sex_orientation-select')
const eyeColorSelect = document.querySelector('#eye_color-select')
const hairColorSelect = document.querySelector('#hair_color-select')
const ageSelect = document.querySelector('#age-select')
const pTraitOneSelect = document.querySelector('#personality_traits_One-select')
const pTraitTwoSelect = document.querySelector('#personality_traits_Two-select')
const pTraitThreeSelect = document.querySelector('#personality_traits_Three-select')



//functions:

function createCharacter(event){
    event.preventDefault()

    const formData = new FormData(form)
    const body = {}

    for (const pair of formData.entries()) {
      body[pair[0]] = pair[1]
    }

    axios.post('/createCharacter', body).then(function(data){
        const character = data.data[0][0]
        const url = `/see_chars.html#${character.character_id}`
        window.location = url
    })




    
}




//drop-down functions:

//race//
function getRace() {
    axios.get('http://localhost:5500/race')
        .then(res => {
            res.data.forEach(race => {
                const option = document.createElement('option')
                option.value = race.race_id
                option.label = race.race
                raceSelect.appendChild(option)
            })
        })
}

//gender//
function getGender() {
    axios.get('http://localhost:5500/gender')
        .then(res => {
            res.data.forEach(gender => {
                const option = document.createElement('option')
                option.value = gender.gender_id
                option.label = gender.gender
                genderSelect.appendChild(option)
            })
        })
}

//sex_orientation//
function getSexOrientation() {
    axios.get('http://localhost:5500/sexOrientation')
        .then(res => {
            res.data.forEach(sex_orientation => {
                const option = document.createElement('option')
                option.value = sex_orientation.orientation_id
                option.label = sex_orientation.sex_orientation
                sexOrientationSelect.appendChild(option)
            })
        })
}

//eye_color//
function getEyeColor() {
    axios.get('http://localhost:5500/eyeColor')
        .then(res => {
            res.data.forEach(eye_color => {
                const option = document.createElement('option')
                option.value = eye_color.eye_color_id
                option.label = eye_color.eye_color
                eyeColorSelect.appendChild(option)
            })
        })
}

//hair_color//
function getHairColor() {
    axios.get('http://localhost:5500/hairColor')
        .then(res => {
            res.data.forEach(hair_color => {
                const option = document.createElement('option')
                option.value = hair_color.hair_color_id
                option.label = hair_color.hair_color
                hairColorSelect.appendChild(option)
            })
        })
}

//age//
function getAge() {
    axios.get('http://localhost:5500/age')
        .then(res => {
            res.data.forEach(age => {
                const option = document.createElement('option')
                option.setAttribute('value', age['age_id'])
                option.textContent = age.age
                ageSelect.appendChild(option)
            })
        })
}

//personality traits//
function getPTraitOne() {
    axios.get('http://localhost:5500/pTraitOne')
        .then(res => {
            res.data.forEach(personality_traits => {
                const option = document.createElement('option')
                option.value = personality_traits.ptraits_id
                option.label = personality_traits.ptraits
                pTraitOneSelect.appendChild(option)
            })
        })
}

function getPTraitTwo() {
    axios.get('http://localhost:5500/pTraitTwo')
        .then(res => {
            res.data.forEach(personality_traits => {
                const option = document.createElement('option')
                option.value = personality_traits.ptraits_id
                option.label = personality_traits.ptraits
                pTraitTwoSelect.appendChild(option)
            })
        })
}

function getPTraitThree() {
    axios.get('http://localhost:5500/pTraitThree')
        .then(res => {
            res.data.forEach(personality_traits => {
                const option = document.createElement('option')
                option.value = personality_traits.ptraits_id
                option.label = personality_traits.ptraits
                pTraitThreeSelect.appendChild(option)
            })
        })
}








getRace()
getGender()
getSexOrientation()
getEyeColor()
getHairColor()
getAge()
getPTraitOne()
getPTraitTwo()
getPTraitThree()


form.addEventListener('submit', createCharacter)