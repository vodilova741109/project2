// пишем на стандарте ES-6, не пропустит ошибку прошлого стандарта
"use strict";
//Урок 2.3 Простое общение с пользователями

// let arr = ['plum.png', 'orange.jpeg', ];
// можно протестировать в консоле редактора (правой кнопкой мыши RunCode), остальные только в браузере
// console.log(arr[1]); 

// поялвется модальное окно с кнопкой "Ok"
// alert("Hello World"); 

// поялвется модальное окно с кнопкой "Ok" и "отмена"
// confirm("Are you here?");

// если мы добавим переменную с функцией confirm  и ответим да или нет, то в консоле появится логическое выражение true или false
// let answer = confirm("Are you here?");
// console.log(answer);


// выводит модальное окно с поле для ввода от пользователя

// let answer = +prompt("Есть ли Вам 18?", "Да");
// console.log(answer);

// если нужно в консоле увидеть тип переменной
// console.log(typeof(answer)); 


// // Урок 2.4. Операторы в JS 
// let answer = +prompt("Есть ли Вам 18?", "Да");
// console.log(typeof(answer)); 
// console.log("arr" + "-object");

// console.log(5 + +"-object");
// let incr = 10,
//     decr = 10;
// incr++;
// decr--;

// console.log(incr, decr);

// префиксная форма возвращает изменненное значение

// console.log(++incr);
// console.log(--decr);

// постфиксная форма возвращает первоначальное значение

// console.log(incr++);
// console.log(decr--);


// оператор % обозначает остаток от деления двух чисел

// console.log(5%2);

// знак равенства: один раз - присваивание, два раза - проверка на равенство, три раза - строгая проверка по типам данных

// console.log("2" === 2);

// логические операторы И и ИЛИ

// let IsChecked = true,
//     isClose = false;

// логический оператор отрицания знак !
// console.log(IsChecked && !isClose);

// функция склонения 

// function declOfNum(n, text_forms) {  
//     n = Math.abs(n) % 100; 
//     var n1 = n % 10;
//     if (n > 10 && n < 20) { return text_forms[2]; }
//     if (n1 > 1 && n1 < 5) { return text_forms[1]; }
//     if (n1 == 1) { return text_forms[0]; }
//     return text_forms[2];
//     console.log(text_forms[2]);
// }


// declOfNum(1, ['статья', 'статьи', 'статей']); // вернёт — статья
// declOfNum(2, ['статья', 'статьи', 'статей']); // вернёт —статьи
// declOfNum(5, ['статья', 'статьи', 'статей']); // вернёт — статей

//  -!функция склонения 

// Массивы 2.15

// let arr =[1, 2, 3, "four", 5];

// for (let i = 0; i < arr.length; i++){
// 	console.log(arr[i]);
// }

// arr.forEach(function (item, i, mass) {
// 	console.log(i + ': ' + item + ' (массив ' + mass +')' );
// })

// console.log(arr);

// let mass =[1,2,3,4,5]

// for (let key in mass){
// 	console.log(key);
// }

// for (let key of mass){
// 	console.log(key);
// }

// получает данные от пользователя и отправить в массив
// let ans = prompt('', ''),
// arr =[];
// arr = ans.split(',');
// console.log(arr);

// массив преобразует в строку
// let arr = ['aaw','zzz','rrr','yyy'],
//  i = arr.join(', ');
//  console.log(i);

// сортирует массив

// let arr = ['aaw','zzz','rrr','yyy'],
//  i = arr.sort();

//  console.log(arr);

// сортировка чисел
//  let arr = [1,14,4],
// 	i = arr.sort(compareNum);

//  function compareNum(a,b) {
// 	 return a-b;
//  }
//  console.log(arr);

//ООП

// let soldier ={
// 	health: 500,
// 	armor:100
// }
// let john ={
// 	health: 100
// }

// john.__proto__ = soldier;
// console.log(john);
// console.log(john.armor);

// задача 2.20
// if (1 && 0) { // вычисляется как true && false
//     alert( "не сработает, так как результат ложный" );
//   }

// alert( "1"[0] );

// alert( +"Infinity" );

// 2.22

let box = document.getElementById('box'),
    btn = document.getElementsByTagName('button'),
    circle = document.getElementsByClassName('circle'),
    heart = document.querySelectorAll('.wrapper .heart'),
    oneHeart = document.querySelector('.heart'),
    wrapper = document.querySelector('.wrapper');

// console.log(box);   
// console.log(btn);   
// console.log(btn[0]);   
// console.log(circle[2]);   
// console.log(heart[1]);   
// console.log(oneHeart);    

box.style.backgroundColor = 'blue';
btn[1].style.borderRadius = '100%';

circle[0].style.backgroundColor = 'red';
circle[1].style.backgroundColor = 'yellow';
circle[2].style.backgroundColor = 'green';



// цикл

// for (let i =0; i <h1 heart.length; i++){
//     heart[i].style.backgroundColor = 'blue';
// }

// аналогичный цикл, но удобнее

// heart.forEach(function(item, i, hearts){
//     item.style.backgroundColor = 'blue';

// });

// создание нового элемента


let div = document.createElement('div'),
    text = document.createTextNode('Тут был я');

// добавляем класс
div.classList.add('black'); 


console.log(div);

// добавляем текст или текст в теге

// div.innerHTML = '<h1>Hello World</h1>';

div.textContent = 'Hello World!';

// добавляем div  в Html
// document.body.appendChild(div);

// добавляем div в какой-то блок - wrapper
// wrapper.appendChild(div);

// добавляем div перед чем-то - перед  circle[0]
document.body.insertBefore(div, circle[0]);

// удаляем элемент со страницы - кружочек

document.body.removeChild(circle[1]);
wrapper.removeChild(heart[1]);

// заменяем что-то (1 аргумент) на другое (2 аргумент)

document.body.replaceChild(btn[1], circle[1] );





 