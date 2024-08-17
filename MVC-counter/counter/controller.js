import model from "./model.js";
import view from "./view.js";

const btnMinus = document.getElementById('btnMinus');
const btnPlus = document.getElementById('btnPlus');
const btnReset = document.getElementById('btnReset');

//Начальное значение счетчика на старте работы программы
//Здесь данные из модели передаем в функцию, которая относится ко вью
// updateCounter(counter);
//Прослушка клика по кнопкам и измение модели и обновление во вью
// btnPlus.addEventListener('click', () => {increase(); updateCounter(counter);})
// btnMinus.addEventListener('click', () => {decrease(); updateCounter(counter);})
// btnReset.addEventListener('click', () => {reset(); updateCounter(counter);})


view.updateCounter(model.counter);
btnPlus.addEventListener('click', () => {model.increase(); view.updateCounter(model.counter);})
btnMinus.addEventListener('click', () => {model.decrease(); view.updateCounter(model.counter);})
btnReset.addEventListener('click', () => {model.reset(); view.updateCounter(model.counter);})