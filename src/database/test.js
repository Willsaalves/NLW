const db = require('./db')
const createProffy = require('./createProffy')

db.then(async(db) => {

    proffyValue = {
        name: 'Willian de Sa',
        avatar: 'https://avatars2.githubusercontent.com/u/55805479?s=460&u=7e08062e17104ec96814e36a4ccd4eddb7b21d70&v=4',
        whatsapp: '11984163442',
        bio: 'consultor de artes'

    }
    classValue = {
        subject: 1,
        cost: "20"

    }

    classScheduleValue = [{
            weekday: 3,
            time_from: 720,
            time_to: 1220
        },

        {
            weekday: 0,
            time_from: 520,
            time_to: 1220
        }
    ]

    // await createProffy(db, { proffyValue, classValue, classScheduleValue }).then

    //Consultar de dados inseridos


    const selectedProffys = await db.all("SELECT * FROM proffys")
        //console.log(selectedProffys)

    //consultar as classase de um determinado professor e trazer juntos os dados

    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id) 
        WHERE classes.proffy_id = 1;
    `)

    //console.log(selectClassesAndProffys)


    //  horario que a pessoa trabalha, por ex, é das 9 as 18


    const selectClassesShedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule 
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "520"
        AND class_schedule.time_to > "520"
        `)

    //console.log(selectClassesShedules)
})