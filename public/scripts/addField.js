//Procurar o botao
document.querySelector('#add-time').addEventListener('click', cloneField)

//Executar uma acao
function cloneField() {

    //Duplica os campos. Que campo?

    const newFieldsContainer = document.querySelector('.schedule-item').cloneNode(true)

    //limpar os campos


    const fields = newFieldsContainer.querySelectorAll('input')


    //para cada campo, limpar
    fields.forEach(function(field) {

            field.value = ""



        })
        //Colocar na página
    document.querySelector('#schedule-items').appendChild(newFieldsContainer)


}