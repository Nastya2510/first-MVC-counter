//Отображение и обновление

// const input = document.getElementById('input');
// //Обновление вида input'a
// function updateCounter(counter){
//     input.value = counter;
// }

//Раньше тут было const view = {}
export default{
    input: document.getElementById('input'),
    updateCounter: function(counter){
        this.input.value = counter;
    }
}
