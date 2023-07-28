//лифт
let elevator = document.querySelector('.elevator');

//выбираем этаж
let firstFloor = document.querySelector('.first-floor');
let secondFloor = document.querySelector('.second-floor');
let thirdFloor = document.querySelector('.third-floor');
let fouthFloor = document.querySelector('.fourth-floor');
let fifthFloor = document.querySelector('.fifth-floor');

//выбираем кнопки вверх и вниз
let btnUp = document.querySelector('.buttonUp');
let btnDown = document.querySelector('.buttonDown');

//запрашиваем нужный лифт
let btn = document.querySelector('.btn');

let selectedFloor = 0;
btn.addEventListener('click', () => {
  selectedFloor = +prompt('Введите нужный этаж', []);
  switch (selectedFloor) {
    case 1:
      elevator.style.marginBottom = '0';
      break;
    case 2:
      elevator.style.marginBottom = '100px';
      break;
    case 3:
      elevator.style.marginBottom = '200px';
      break;
    case 4:
      elevator.style.marginBottom = '300px';
      break;
    case 5:
      elevator.style.marginBottom = '400px';
      break;
  }
});

//перемещение лифта при нажатии нужной кнопки
firstFloor.addEventListener('click', () => {
  if (elevator.style.marginBottom !== 0) {
    elevator.style.marginBottom = '0';
  }
});
secondFloor.addEventListener('click', () => {
  elevator.style.marginBottom = '100px';
});
thirdFloor.addEventListener('click', () => {
  elevator.style.marginBottom = '200px';
});
fouthFloor.addEventListener('click', () => {
  elevator.style.marginBottom = '300px';
});
fifthFloor.addEventListener('click', () => {
  elevator.style.marginBottom = '400px';
});

//лифт едет на вверх
btnUp.addEventListener('click', () => {
  switch (elevator.style.marginBottom) {
    case '':
    case '0px':
      elevator.style.marginBottom = '100px';
      break;
    case '100px':
      elevator.style.marginBottom = '200px';
      break;
    case '200px':
      elevator.style.marginBottom = '300px';
      break;
    case '300px':
      elevator.style.marginBottom = '400px';
      break;
  }
});

//лифт едет вниз
btnDown.addEventListener('click', () => {
  switch (elevator.style.marginBottom) {
    case '400px':
      elevator.style.marginBottom = '300px';
      break;
    case '300px':
      elevator.style.marginBottom = '200px';
      break;
    case '200px':
      elevator.style.marginBottom = '100px';
      break;
    case '100px':
      elevator.style.marginBottom = '0';
      break;
  }
});