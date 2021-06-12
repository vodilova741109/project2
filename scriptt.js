"use strict";


let money = +prompt("Ваш бюджет на месяц?", 20000 );
console.log(money); 
let time = prompt("Введите дату в формате YYYY-MM-DD", "2021-06-01");
console.log(time); 

// данные времени
// let timeData = time; 



// необязательные расходы
// let optionalExpenses =[];

// дополнительные доходы
// let income =[];

// свойство
// let savings = false;

let  article = prompt("Введите обязательную статью расходов в этом месяце");
console.log(article); 
let sum = +prompt("Во сколько обойдется?", 0);
console.log(sum); 
let  article_1 = prompt("Введите вторую обязательную статью расходов в этом месяце");
console.log(article_1); 
let sum_1 = +prompt("Во сколько обойдется?", 0);
console.log(sum_1); 

// обязательные расходы
let expenses = sum + sum_1;

let appData = {
    money, 
    timeData: time, 
    expenses,   
    optionalExpenses: {},
    income: [],
    savings: false
}


console.log (money - expenses );



alert ("Ваш бюджет: " + (appData.money - appData.expenses)/30);