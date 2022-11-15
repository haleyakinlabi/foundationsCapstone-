require('dotenv').config()
// const path = require('path')
const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const {SERVER_PORT} = process.env

const {
    seed, 
    getRace, 
    getGender, 
    getSexOrientation, 
    getEyeColor, 
    getHairColor, 
    getAge, 
    getPTraitOne, 
    getPTraitTwo, 
    getPTraitThree, 
    createCharacter,
    getCharacter,
    getCharacters
} = require('./controller.js')

app.use(express.json())
app.use(bodyParser.json())
app.use(express.static('public'))
app.use(cors())



//data_base 
app.post('/seed', seed)

//create character form 
app.post('/createCharacter', createCharacter)

//get character 
app.get('/character/:id', getCharacter)
app.get('/characters', getCharacters)



// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '../home/home.html'))
// })
// app.get('/home/home.css', (req, res) => {
//     res.sendFile(path.join(__dirname, '../home/home.css'))
// })
// app.get('/home/home.js', (req, res) => {
//     res.sendFile(path.join(__dirname, '../home/home.js'))
// })












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









