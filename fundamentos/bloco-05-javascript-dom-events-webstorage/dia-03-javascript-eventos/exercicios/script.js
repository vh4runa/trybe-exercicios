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

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const ulDays = document.getElementById('days');

function createDayDez(arr) {
  let li;
  for(let val of arr) {
    li = document.createElement('li');
    li.classList.add('day');
    li.innerText = val;
    switch(val) {
      case 24:
        li.classList.add('holiday');
        break;
      case 25:
        li.classList.add('holiday');
        li.classList.add('friday');
        break;
      case 31:
        li.classList.add('holiday');
        break;
      case 4:
        li.classList.add('friday');
        break;
      case 11:
        li.classList.add('friday');
        break;
      case 18:
        li.classList.add('friday');
        break;
    }
    ulDays.appendChild(li);
  }
}

createDayDez(dezDaysList);