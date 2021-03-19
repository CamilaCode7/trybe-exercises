function createDaysOfTheWeek() {
	const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
	const weekDaysList = document.querySelector('.week-days');

	for (let index = 0; index < weekDays.length; index += 1) {
		const days = weekDays[index];
		const dayListItem = document.createElement('li');
		dayListItem.innerHTML = days;

		weekDaysList.appendChild(dayListItem);
	};
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
function diasCalender() {
	const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
	let getDaysList = document.querySelector('#days');
	for (let index = 0; index < dezDaysList.length; index += 1) {
		let day = dezDaysList[index];
		let dayItem = document.createElement('li');
		if (day === 24 | day === 31) {
			dayItem.className = 'day holiday';
			dayItem.innerHTML = day;
			getDaysList.appendChild(dayItem);
		} else if (day === 4 | day === 11 | day === 18) {
			dayItem.className = 'day friday';
			dayItem.innerHTML = day;
			getDaysList.appendChild(dayItem);
		} else if (day === 25) {
			dayItem.className = 'day holiday friday'
			dayItem.innerHTML = day;
			getDaysList.appendChild(dayItem)
		} else {
			dayItem.innerHTML = day;
			dayItem.className = 'day';
			getDaysList.appendChild(dayItem);
		}
	}
}
diasCalender()
function feriados(buttonName) {
	let buttons = document.querySelector('.buttons-container');
	let botao = document.createElement('button');
	let botaoID = 'btn-holiday';
	
	botao.innerHTML = buttonName;
	botao.id = botaoID;
	buttons.appendChild(botao);
}
feriados('Feriados')
function adicionaFeriados() {
	let holidayButton = document.querySelector('#btn-holiday');
	let holidays = document.querySelectorAll('.holiday');
	
	holidayButton.addEventListener('click', function() {
		for (let index = 0; index < holidays.length; index += 1) {
			if(holidays[index].style.backgroundColor === 'white') {
				holidays[index].style.backgroundColor = 'rgb(238,238,238)';
			} else {
				holidays[index].style.backgroundColor = 'white';
			}			
		}
	})
};
adicionaFeriados();
function sexta(buttonName) {
	let buttons = document.querySelector('.buttons-container');
	let botao = document.createElement('button');
	let botaoID = 'btn-friday';
	
	botao.innerHTML = buttonName;
	botao.id = botaoID;
	buttons.appendChild(botao);
}
sexta('Sexta-feira');

function botaoSexta(fridayArray) {
	let botaofriday = document.querySelector('#btn-friday');
	let botaoclassfriday = document.getElementsByClassName('friday-day');
	let newFriday = 'SEXTOU o/';
	botaofriday.addEventListener('click', function() {
		for (let index = 0; index < botaoclassfriday.length; index += 1) {
			if(botaoclassfriday[index].innerHTML !== newFriday) {
				botaoclassfriday[index].innerHTML = newFriday;
			} else {
				botaoclassfriday[index].innerHTML = fridayArray[index];
			}			
		}
	})
}
let quatroFriday = [4, 11, 18, 25];
botaoSexta(quatroFriday);

function mouseOver() {
	let days = document.querySelector('#days');
	days.addEventListener('mouseover', function(event) {
		event.target.style.fontSize = '30px';
		event.target.style.fontWeight = '600';
	})
}
mouseOver()

function mouseOverDelete() {
	let days = document.querySelector('#days');
	days.addEventListener('mouseout', function(event){
		event.target.style.fontSize = '20px';
		event.target.style.fontWeight = '400';
	})
}
mouseOverDelete()

function newTaskSpan(task) {
	let tasks = document.querySelector('.my-tasks');
	let taskName = document.createElement('span');

	taskName.innerHTML = task;
	tasks.appendChild(taskName);
};
newTaskSpan('Projeto:')