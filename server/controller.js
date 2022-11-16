require('dotenv').config()

const Sequelize = require('sequelize')

const characterQuery = `SELECT 
character.first_name, 
character.last_name, 
race.race,
gender.gender,
sex_orientation.sex_orientation,
eye_color.eye_color,
hair_color.hair_color,
age.age
FROM character 
JOIN race ON race.race_id = character.race_id
JOIN gender ON gender.gender_id = character.gender_id
JOIN sex_orientation ON sex_orientation.orientation_id = character.sex_orientation_id
JOIN eye_color ON eye_color.eye_color_id = character.eye_color_id
JOIN hair_color ON hair_color.hair_color_id = character.hair_color_id
JOIN age ON age.age_id = character.age_id`

const sequelize = new Sequelize(process.env.CONNECTION_STRING, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
})

module.exports = {
    seed: (req, res) => {
        sequelize.query(`
            
            CREATE TABLE eye_color (
                eye_color_id SERIAL PRIMARY KEY, 
                eye_color VARCHAR(50) NOT NULL UNIQUE
            );

            CREATE TABLE hair_color (
                hair_color_id SERIAL PRIMARY KEY, 
                hair_color VARCHAR(50) NOT NULL UNIQUE
            );

            CREATE TABLE race (
                race_id SERIAL PRIMARY KEY, 
                race VARCHAR(100) NOT NULL UNIQUE
            );

            CREATE TABLE aesthetic (
                aesthetic_id SERIAL PRIMARY KEY, 
                aesthetic_url VARCHAR(500) NOT NULL UNIQUE
            );

            CREATE TABLE age(
                age_id SERIAL PRIMARY KEY, 
                age INTEGER NOT NULL UNIQUE
            );
           
            CREATE TABLE sex_orientation (
                orientation_id SERIAL PRIMARY KEY, 
                sex_orientation VARCHAR(80) NOT NULL UNIQUE
            );

            CREATE TABLE gender (
                gender_id SERIAL PRIMARY KEY, 
                gender VARCHAR(80) NOT NULL UNIQUE
            );

            CREATE TABLE personality_traits (
                Ptraits_id SERIAL PRIMARY KEY, 
                Ptraits VARCHAR(80) NOT NULL UNIQUE
            );


            CREATE TABLE character(
                character_id SERIAL PRIMARY KEY, 
                first_name VARCHAR(80) NOT NULL,
                last_name VARCHAR(80) NOT NULL,
                eye_color_id INTEGER NOT NULL REFERENCES eye_color(eye_color_id),
                hair_color_id INTEGER NOT NULL REFERENCES hair_color(hair_color_id),
                race_id INTEGER NOT NULL REFERENCES race(race_id),
                aesthetic_id INTEGER NOT NULL REFERENCES aesthetic(aesthetic_id),
                age_id INTEGER NOT NULL REFERENCES age(age_id),
                sex_orientation_id INTEGER NOT NULL REFERENCES sex_orientation(orientation_id),
                gender_id INTEGER NOT NULL REFERENCES gender(gender_id),
                personality_traits_id_one INTEGER NOT NULL REFERENCES personality_traits(Ptraits_id),
                personality_traits_id_two INTEGER NOT NULL REFERENCES personality_traits(Ptraits_id),
                personality_traits_id_three INTEGER NOT NULL REFERENCES personality_traits(Ptraits_id)
            ); 

            INSERT INTO eye_color (eye_color)
            VALUES ('Grey'),
            ('Blue'),
            ('Amber'),
            ('Brown'),
            ('Green'),
            ('Hazel'),
            ('Black');

            INSERT INTO hair_color (hair_color)
            VALUES ('Platinum Blonde'),
            ('Ash Blonde'),
            ('Golden Blonde'),
            ('Strawberry Blonde'),
            ('Red'),
            ('Auburn'),
            ('Ash Brown'),
            ('Light Brown'),
            ('Golden Brown'),
            ('Chocolate Brown'),
            ('Jet Black'),
            ('Cherry Black'),
            ('Cinnamon Brown'),
            ('White'),
            ('Grey'),
            ('Pink'),
            ('Purple'),
            ('Blue'),
            ('Green');

            INSERT INTO race (race)
            VALUES ('White'),
            ('Native Hawaiian/Other Pacific Islander'),
            ('Hispanic/Latino'),
            ('Black/African American'),
            ('Asian'),
            ('American Indian/Alaska Native');

            INSERT into aesthetic (aesthetic_url)
            VALUES ('https://images.pexels.com/photos/4873502/pexels-photo-4873502.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'),
            ('https://images.pexels.com/photos/1075776/pexels-photo-1075776.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'),
            ('https://images.pexels.com/photos/8357139/pexels-photo-8357139.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'),
            ('https://images.pexels.com/photos/3014810/pexels-photo-3014810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'),
            ('https://images.pexels.com/photos/8033848/pexels-photo-8033848.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'),
            ('https://images.pexels.com/photos/5485888/pexels-photo-5485888.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'),
            ('https://images.pexels.com/photos/6890242/pexels-photo-6890242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'),
            ('https://images.pexels.com/photos/9095349/pexels-photo-9095349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'),
            ('https://images.pexels.com/photos/13661647/pexels-photo-13661647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');

            INSERT INTO age (age)
            VALUES (1),
            (2),
            (3),
            (4),
            (5),
            (6),
            (7),
            (8),
            (9),
            (10),
            (11),
            (12),
            (13),
            (14),
            (15),
            (16),
            (17),
            (18),
            (19),
            (20),
            (21),
            (22),
            (23),
            (24),
            (25),
            (26),
            (27),
            (28),
            (29),
            (30),
            (31),
            (32),
            (33),
            (34),
            (35),
            (36),
            (37),
            (38),
            (39),
            (40),
            (41),
            (42),
            (43),
            (44),
            (45),
            (46),
            (47),
            (48),
            (49),
            (50),
            (51),
            (52),
            (53),
            (54),
            (55),
            (56),
            (57),
            (58),
            (59),
            (60),
            (61),
            (62),
            (63),
            (64),
            (65),
            (66),
            (67),
            (68),
            (69),
            (70),
            (71),
            (72),
            (73),
            (74),
            (75),
            (76),
            (77),
            (78),
            (79),
            (80),
            (81),
            (82),
            (83),
            (84),
            (85),
            (86),
            (87),
            (88),
            (89),
            (90),
            (91),
            (92),
            (93),
            (94),
            (95),
            (96),
            (97),
            (98),
            (99),
            (100);

            INSERT into sex_orientation (sex_orientation)
            VALUES ('Asexual'),
            ('Bisexual'),
            ('Heterosexual'),
            ('Lesbian'),
            ('Pansexual'),
            ('Aromantic'),
            ('Gay'),
            ('Allosexual'),
            ('Demisexual'),
            ('Skoliosexual');


            INSERT INTO gender (gender)
            VALUES ('Cisgender'),
            ('Transgender'),
            ('Cishet'),
            ('Non-binary'),
            ('Intersex'),
            ('Genderqueer'),
            ('Gender-fluid'),
            ('Agender'),
            ('Bigender'),
            ('Omnigender'),
            ('Pangender');

            INSERT INTO personality_traits (Ptraits)
            VALUES ('Active'),
            ('Adaptable'),
            ('Adventurous'),
            ('Articulate'),
            ('Athletic'),
            ('Benevolent'),
            ('Captivating'),
            ('Caring'),
            ('Charismatic'),
            ('Clever'),
            ('Compassionate'),
            ('Courageous'),
            ('Creative'),
            ('Daring'),
            ('Decisive'),
            ('Dramatic'),
            ('Educated'),
            ('Empathetic'),
            ('Energetic'),
            ('Faithful'),
            ('Flexible'),
            ('Focused'),
            ('Forgiving'),
            ('Friendly'),
            ('Gallant'),
            ('Gentle'),
            ('Genuine'),
            ('Healthy'),
            ('Herioc'),
            ('Humble'),
            ('Humorous'),
            ('Imaginative'),
            ('Independent'),
            ('Innovative'),
            ('Intelligent'),
            ('Intuitive'),
            ('Leaderly'),
            ('Liberal'),
            ('Logical'),
            ('Loyal'),
            ('Mature'),
            ('Maticulous'),
            ('Neat'),
            ('Observant'),
            ('Optimistic'),
            ('Organized'),
            ('Passionate'),
            ('Peaceful'),
            ('Personable'),
            ('Playful'),
            ('Polished'),
            ('Protective'),
            ('Realistic'),
            ('Reliable'),
            ('Resourceful'),
            ('Romantic'),
            ('Selfless'),
            ('Sentimental'),
            ('Sophisticated'),
            ('Stoic'),
            ('Sympathetic'),
            ('Trusting'),
            ('Understanding'),
            ('Venturesome'),
            ('Vivacious'),
            ('Warm'),
            ('Wise'),
            ('Witty'),
            ('Youthful'),
            ('Aggressive'),
            ('Ambitious'),
            ('Artful'),
            ('Conservative'),
            ('Deceptive'),
            ('Emotional'),
            ('Frugal'),
            ('Glamorous'),
            ('Noncommittal'),
            ('Private'),
            ('Reserved'),
            ('Skeptical'),
            ('Stubborn'),
            ('Whimsical'),
            ('Abrasive'),
            ('Anxious'),
            ('Argumentative'),
            ('Blunt'),
            ('Childish'),
            ('Coarse'),
            ('Conceited'),
            ('Cowardly'),
            ('Demanding'),
            ('Devious'),
            ('Dishonest'),
            ('Dull'),
            ('Egocentric'),
            ('Fickle'),
            ('Fiery'),
            ('Flamboyant'),
            ('Greedy'),
            ('Gullible'),
            ('Hostile'),
            ('Hateful'),
            ('Ignorant'),
            ('Indecisive'),
            ('Insecure'),
            ('Irrational'),
            ('Lazy'),
            ('Malicious'),
            ('Narcissistic'),
            ('Obnoxious'),
            ('Opinionated'),
            ('Paranoid'),
            ('Petty'),
            ('Possessive'),
            ('Presumptuous'),
            ('Quirky'),
            ('Resentful'),
            ('Sadistic'),
            ('Secretive'),
            ('Shallow'),
            ('Submissive'),
            ('Thoughtless'),
            ('Timid'),
            ('Unstable'),
            ('Venomous'),
            ('Vindictive'),
            ('Vulnerable'),
            ('Zany');

            INSERT INTO character (first_name, last_name, eye_color_id, hair_color_id, race_id, aesthetic_id, age_id, sex_orientation_id, gender_id, personality_traits_id_one, personality_traits_id_two, personality_traits_id_three)
                VALUES ('Michael', 'Peterson', 2, 2, 1, 3, 30, 2, 4, 13, 74, 99),
                ('Landon', 'Torres', 4, 13, 6, 1, 40, 8, 2, 117, 9, 13),
                ('Ace', 'Foster', 7, 1, 4, 5, 27, 7, 2, 3, 98, 68),
                ('Nova', 'Vargas', 5, 16, 5, 9, 16, 1, 6, 13, 45, 77),
                ('Piper', 'Berry', 1, 5, 1, 2, 35, 10, 5, 31, 82, 100),
                ('Kehlani', 'Mejia', 3, 10, 2, 7, 20, 4, 1, 6, 19, 87),
                ('Trinity', 'Frazier', 6, 14, 3, 2, 34, 7, , 101, 32, 19);

        `).then(() => {
            console.log('DB seeded!')
            res.sendStatus(200)
        }).catch(err => console.log('error seeding DB', err))
    },
    //drop downs for create new character 
    getRace: (req, res) =>{
        sequelize.query(`
            SELECT * FROM race; 
        `).then((dbRes)=>{
            res.status(200).send(dbRes[0])
        })
    },
    getGender: (req, res) =>{
        sequelize.query(`
            SELECT * FROM gender; 
        `).then((dbRes)=>{
            res.status(200).send(dbRes[0])
        })
    },
    getSexOrientation: (req, res) =>{
        sequelize.query(`
            SELECT * FROM sex_orientation; 
        `).then((dbRes)=>{
            res.status(200).send(dbRes[0])
        })
    },
    getEyeColor: (req, res) =>{
        sequelize.query(`
            SELECT * FROM eye_color; 
        `).then((dbRes)=>{
            res.status(200).send(dbRes[0])
        })
    },
    getHairColor: (req, res) =>{
        sequelize.query(`
            SELECT * FROM hair_color; 
        `).then((dbRes)=>{
            res.status(200).send(dbRes[0])
        })
    },
    getAge: (req, res) =>{
        sequelize.query(`
            SELECT * FROM age; 
        `).then((dbRes)=>{
            res.status(200).send(dbRes[0])
        })
    },
    getPTraitOne: (req, res) =>{
        sequelize.query(`
            SELECT * FROM personality_traits; 
        `).then((dbRes)=>{
            res.status(200).send(dbRes[0])
        })
    },
    getPTraitTwo: (req, res) =>{
        sequelize.query(`
            SELECT * FROM personality_traits; 
        `).then((dbRes)=>{
            res.status(200).send(dbRes[0])
        })
    },
    getPTraitThree: (req, res) =>{
        sequelize.query(`
            SELECT * FROM personality_traits; 
        `).then((dbRes)=>{
            res.status(200).send(dbRes[0])
        })
    },
    createCharacter: (req, res) => {
        // create character in database

        console.log('createCharacter', req.body)
        sequelize.query(`
        INSERT INTO character (first_name, last_name, eye_color_id, hair_color_id, race_id, aesthetic_id, age_id, sex_orientation_id, gender_id, personality_traits_id_one, personality_traits_id_two, personality_traits_id_three)
        VALUES ('${req.body.fname}', '${req.body.lname}', ${req.body.eye_color}, ${req.body.hair_color}, ${req.body.race}, 1, ${req.body.age}, ${req.body.sex_orientation}, ${req.body.gender}, ${req.body.personality_traits_One}, ${req.body.personality_traits_Two}, ${req.body.personality_traits_Three})
        RETURNING character_id;
        `).then((dbRes)=>{
            res.status(200).send(dbRes)
        })


    },
    getCharacter: (req, res) => {
        let sql = `${characterQuery} WHERE character_id = ${req.params.id} limit 1;`
        if (req.params.id === 'random')
          sql = `${characterQuery} order by random () limit 1;`
        sequelize.query(sql)
          .then((dbRes)=>{res.status(200).send(dbRes[0])})
    },
    getCharacters: (req, res) => {
        sequelize.query(characterQuery)
            .then((dbRes)=>{res.status(200).send(dbRes[0])})
    }
}
    
// SELECT first_name, last_name, race, gender, sex_orientation, eye_color, hair_color, age
// FROM character
// JOIN race
//     ON character.race_id = race_id
// JOIN gender
//     ON character.gender_id = gender_id
// JOIN sex_orientation
//     ON character.sex_orientation_id = orientation_id
// JOIN eye_color
//     ON character.eye_color_id = eye_color_id
// JOIN hair_color
//     ON character.hair_color_id = hair_color_id
// JOIN age
//     ON character.age_id = age_id


