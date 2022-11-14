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



function handleSubmit(e) {
    e.preventDefault()

    if (firstNameInput.value < 1) {
        alert ('You must enter a first name')
        return
    }
    if (lastNameInput.value < 1) {
        alert ('You must enter a last name')
        return
    }
    if (aestheticInput.value < 1) {
        alert ('You must enter a image URL')
        return
    }

    let body = {
        first_name: firstNameInput.value,
        last_name: lastNameInput.value,
        aesthetic: aestheticInput.value, 
        
        eye_color_id: +eyeColorSelect.value,
        hair_color_id: +hairColorSelect.value,
        race_id: +raceSelect.value,
        age_id: +ageSelect.value, 
        sex_orientation_id: +sexOrientationSelect.value,
        gender_id: +genderSelect.value,
        personality_traits_id_one: +pTraitOneSelect.value,
        personality_traits_id_two: +pTraitTwoSelect.value,
        personality_traits_id_three: +pTraitThreeSelect.value

        // name: nameInput.value, 
        // rating: +userRating, 
        // countryId: +countrySelect.value
    }
}

    // axios.post('http://localhost:4004/cities', body)
    //     .then(() => {
    //         countrySelect.value = 1
    //         nameInput.value = ''
    //         document.querySelector('#rating-one').checked = true
    //         getCities()
    //     })
// }

// function deleteCard(id) {
//     axios.delete(`http://localhost:4004/cities/${id}`)
//         .then(() => getCities())
//         .catch(err => console.log(err))
// }

// function getCities() {
//     countryList.innerHTML = ''

//     axios.get('http://localhost:4004/cities/')
//         .then(res => {
//             res.data.forEach(elem => {
//                 let countryCard = `<div class="country-card">
//                     <h2>${elem.city}, ${elem.country}</h2>
//                     <h3>Rating: ${elem.rating}/5</h3>
//                     <button onclick="deleteCard(${elem['city_id']})">Delete</button>
//                     </div>
//                 `

//                 countryList.innerHTML += countryCard
//             })
//         })
// }













//drop-down functions:

//race//
function getRace() {
    axios.get('http://localhost:4004/race')
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
    axios.get('http://localhost:4004/gender')
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
    axios.get('http://localhost:4004/sexOrientation')
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
    axios.get('http://localhost:4004/eyeColor')
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
    axios.get('http://localhost:4004/hairColor')
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
    axios.get('http://localhost:4004/age')
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
    axios.get('http://localhost:4004/pTraitOne')
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
    axios.get('http://localhost:4004/pTraitTwo')
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
    axios.get('http://localhost:4004/pTraitThree')
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

