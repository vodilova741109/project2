
"use strict";

let menu = document.getElementById('box'),         
    li = document.getElementsByClassName('menu-item'),
    title = document.getElementById('title'),
    column = document.getElementsByClassName('column'),
    adv = document.getElementsByClassName('adv'),
    prompt1 = document.getElementById('prompt');
    

 

    console.log(prompt1);
  

// Добавляем пятый пункт в меню
   let item = document.createElement('li');

   item.classList.add('menu-item'); 
   item.textContent = 'Пятый пункт';
//    document.body.appendChild(item);
   menu.appendChild(item);

// console.log(item);

// меняем пункты в меню 

menu.insertBefore(li[2], li[1]);
// меняем картинку для body

//    document.body.style.background = 'url(../img/apple_true.jpg) center no-repeat';
   document.body.style.backgroundImage = 'url(../img/apple_true.jpg)';
//    document.body.style.backgroundColor = 'blue';

// меняем текст у заголовка

title.textContent = 'Мы продаем только подлинную технику Apple';

// console.log(title);

// удаляем рекламу

column[1].removeChild(adv[0]);


// добавляем ответ пользователя в promt

let interview = prompt('Ваше отношение к технике apple?');
prompt1.textContent = interview;