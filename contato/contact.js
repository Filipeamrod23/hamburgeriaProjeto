let form = document.querySelector('.form');
form.addEventListener('submit', function(event){
    event.preventDefault()
});
let buttonSchedule = document.querySelector('.button-schedule')

buttonSchedule.addEventListener('click', function(){
    let inputName = document.querySelector('#input-name').value;
    let inputAge = document.querySelector('#input-age').value;
    let inputContact = document.querySelector('#input-contact').value;
    let inputNumber = document.querySelector('#input-number').value;

    document.querySelector('.container-schedule').style.backgroundColor = "#FFF"; 

    document.querySelector('.schedule-title').innerText = "Dados de agendamento"
    document.querySelector('.schedule-name').innerHTML = "<strong>Nome para agendamento: </strong>" + inputName;
    document.querySelector('.schedule-age').innerHTML = "<strong>Idade da pessoa que reservou: </strong>" + inputAge;
    document.querySelector('.schedule-contact').innerHTML = "<strong>Número de telefone: </strong>" + inputContact;
    document.querySelector('.schedule-number').innerHTML = "<strong>Número de pessoas na reserva: </strong>" + inputNumber;
})