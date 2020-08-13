const subjects = [
    "Artes",
    "Biologia",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química"
]


const weekdays = [

    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado"
]



function getSubject(subjectNumber) {

    const position = +subjectNumber - 1
    return subjects[position]
}


function convertHourToMinutes(time) {

    const [hour, minutes] = time.split(":")
    return ((hour * 60) + minutes)

}
module.exports = {
    subjects,
    weekdays,
    getSubject,
    convertHourToMinutes
}