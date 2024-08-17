//Находим все наши кнопочки
const input = document.getElementById('input');
const btnMinus = document.getElementById('btnMinus');
const btnPlus = document.getElementById('btnPlus');
const btnReset = document.getElementById('btnReset');

//Вынести значение инпута в переменную. Хранить данные в скрипте, а не в разметке
let counter = 0;
input.value = counter;

//Пишем поведения для наших кнопочек. Как они будут работать? Простой вариант
//Простой вариант
// btnPlus.addEventListener('click', () => {input.value = parseInt(input.value) + 1})
// btnMinus.addEventListener('click', () => {input.value = parseInt(input.value) - 1})
// btnReset.addEventListener('click', () => {input.value = 0})

//Вариант с counter из переменной, а не из разметки
btnPlus.addEventListener('click', () => {counter += 1; input.value = counter; })
btnMinus.addEventListener('click', () => {counter -= 1; input.value = counter; })
btnReset.addEventListener('click', () => {counter = 0; input.value = counter; })

