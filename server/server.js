require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const {SERVER_PORT} = process.env


const {seed, getRace, getGender, getSexOrientation, getEyeColor, getHairColor, getAge, getPTraitOne, getPTraitTwo, getPTraitThree, createCharacter} = require('./controller.js')

app.use(express.json())
app.use(cors())



//data_base 
app.post('/seed', seed)

//create character form 
app.post('/character', createCharacter)


//create new character drop downs
app.get('/race', getRace)

app.get('/gender', getGender)

app.get('/sexOrientation', getSexOrientation)

app.get('/eyeColor', getEyeColor)

app.get('/hairColor', getHairColor)

app.get('/age', getAge)

app.get('/pTraitOne', getPTraitOne)

app.get('/pTraitTwo', getPTraitTwo)

app.get('/pTraitThree', getPTraitThree)










app.listen(SERVER_PORT, () => console.log(`up on ${SERVER_PORT}`))

