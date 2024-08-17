//Здесь находятся данные нашего приложения и все, что связано с изменением этих данных

// let counter = 0;
// function increase(){
//     ++counter;
// }
// function decrease(){
//     --counter;
// }
// function reset(){
//     counter = 0;
// }

//Чтобы понимать откуда что вызыватся, опишем все в виде ОБЪЕКТА
//Функции здесь описаны как методы объекта model
//Раньше тут было const model = {}
export default{
    counter: 0,
    increase: function(){
        ++this.counter;
    },
    decrease: function(){
        --this.counter;
    },
    reset: function(){
        this.counter = 0;
    },
}