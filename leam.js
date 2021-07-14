// 2.10
// let name = prompt('Какое «официальное» название JavaScript?', '');
// if (name == 'ECMAScript'){
//     alert('Верно!');
// }else{
//     alert('Не знаете? ECMAScript!');
// }

// let i = prompt('Напишите любое число', 0 );
// if (i > 0){
//     alert(1);
// }else if(i < 0){
//     alert(-1);
// } else {
//     alert(0);
// }

// let result,
//     a=2;
//     b=1;


// if (a + b < 4) {
//   result = 'Мало';
//   alert(result);
// } else {
//   result = 'Много';
//   alert(result);
// }

// result = (a + b < 4) ? alert('Мало') : alert("Много");

// let message;

// if (login == 'Сотрудник') {
//   message = ;
// } else if (login == 'Директор') {
//   message = 'Здравствуйте';
// } else if (login == '') {
//   message = 'Нет логина';
// } else {
//   message = '';
// }


// let message = (login == 'Сотрудник') ? 'Привет' :
// (login == 'Директор') ? 'Здравствуйте' :
// (login == '') ? 'Нет логина':
// '';

// Префиксный вариант ++i:
// let i = 0;
// while (++i < 5) alert( i );

// Постфиксный вариант i++
// let i = 0;
// while (i++ < 5) alert( i );


// четных чисел
// for (let i = 2; i < 11; i++) {
//     if (i % 2 == 0) 
//             alert(i);  
    
// }

// for (let i = 2; i <= 10; i++) {
//     if (i % 2 != 0) continue;
//         alert(i);  
    
// }

// вывод нечетных чисел
// for (let i = 0; i < 10; i++) {

//     // если true, пропустить оставшуюся часть тела цикла
//     if (i % 2 == 0) continue;
  
//     alert(i); // 1, затем 3, 5, 7, 9
//   }

// заменить for  на while
// for (let i = 0; i < 3; i++) {
//     alert( `number ${i}!` );
//   }

//   let i = 0;
//   while( i < 3){
//     alert( `number ${i}!` );
//     i++;
//   }

// break прервет цикл когда условие будет true, в данном случае будет пустое
// let sum = 0;

// while (true) {

//   let value = +prompt("Введите число", '');

//   if (!value) break; // (*)

//   sum += value;

// }
// alert( 'Сумма: ' + sum );



// while(true){
//     let num = +prompt('Введите число больше 100', 0);
//     if( num < 100){
//         let num = +prompt('Введите еще раз число больше 100', 0);
//     }   
//     alert('Спасибо, вы ввели: ' + num);

// }

// Повторять цикл, пока ввод неверен
// 1 в данном случае добиваемся получения данных в любом случае
// let num = +prompt('Введите число больше 100', 0);
// for (!num; num < 100; ){ 
//     num = +prompt('Введите еще раз число больше 100', 0);    
// }  
// alert('Спасибо, вы ввели: ' + num);    

// 2 добиваемся числа больше 100, только если пользователь не нажмет отмена
// let num;
// do {
//   num = prompt("Введите число, большее 100?", 0);
// } while (num <= 100 && num);

// вывести протые числа для этого необходимы метки для того чтобы выйти из обоих циклов


// let n = 10,
//     i = 1;

// nextPrime:
// for (let i = 2; i <= n; i++) {

//     for (let j = 2; j < i; j++) { // проверить, делится ли число..
//         if (i % j == 0) continue nextPrime; // не подходит, берём следующее
//       }
//     alert(i); 
// }        


// Задание переписать конструкцию switch в if
// switch (browser) {
//     case 'Edge':
//       alert( "You've got the Edge!" );
//       break;
  
//     case 'Chrome':
//     case 'Firefox':
//     case 'Safari':
//     case 'Opera':
//       alert( 'Okay we support these browsers too' );
//       break;
  
//     default:
//       alert( 'We hope that this page looks ok!' );
//   }

//   let browser = prompt('Введите браузер', '');

//   if(browser =='Edge'){
//     alert( "You've got the Edge!" );
//   } else if(browser =='Chrome' || browser =='Firefox' || browser =='Safari' || browser =='Opera'){
//     alert( 'Okay we support these browsers too' );
//   } else{
//     alert( 'We hope that this page looks ok!' );
//   }

// Задание переписать конструкцию  if в switch

// const number = +prompt('Введите число между 0 и 3', '');

// if (number === 0) {
//   alert('Вы ввели число 0');
// }

// if (number === 1) {
//   alert('Вы ввели число 1');
// }

// if (number === 2 || number === 3) {
//   alert('Вы ввели число 2, а может и 3');
// }

// const number = +prompt('Введите число между 0 и 3', '');

// switch(number){
//     case 0:
//     alert('Вы ввели число 0');
//     break;

//     case 1:
//     alert('Вы ввели число 1');
//     break;
//     case 2:
//     case 3:
//     alert('Вы ввели число 2, а может и 3');
//     break;
// }

// Функции


// function showMessage(from, text = "текст не добавлен") {
//     alert( from + ": " + text );
   
//   }
  
//   showMessage("Аня", 'Привет!'); // Аня: текст не добавлен
// let age = prompt('Сколько вам лет?', 18);
  

// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } else {
//       return confirm('А родители разрешили?');
//     }
//   }
  

//   if ( checkAge(age) ) {
//     alert( 'Доступ получен' );
//   } else {
//     alert( 'Доступ закрыт' );
//   }
  
//   function showMovie(age) {
//     if ( !checkAge(age) ) {
//       return;
//     }
  
//     alert( "Вам показывается кино" ); // (*)
//     // ...
//   }

//   showMovie();



// let n = 10,
// i = 1;

// nextPrime:
// for (let i = 2; i <= n; i++) {

//     for (let j = 2; j < i; j++) { // проверить, делится ли число..
//         if (i % j == 0) continue nextPrime; // не подходит, берём следующее
//       }
//     alert(i); 
// }  

// вывод простых чисел через метку и функцию внутри функции
// function showPrimes(n) {
//     nextPrime: for (let i = 2; i < n; i++) {
  
//       for (let j = 2; j < i; j++) {
//         if (i % j == 0) continue nextPrime;
//       }
  
//       alert( i ); // простое
//     }
//   }
// showPrimes(10);

// вывод простых чисел через две функции
//  нижняя проверяет простое ли число через остаток при делении
// верхняя выводит только простые перескакивая через остальные 
// let n = 20;
// function showPrimes(n) {

//     for (let i = 2; i < n; i++) {
//       if (!isPrime(i)) continue;
  
//       alert(i);  // простое
//     }
//   }
  
//   function isPrime(n) {
//     for (let i = 2; i < n; i++) {
//       if ( n % i == 0) return false;
//     }
//     return true;
//   }
  
//   showPrimes(10);


// переписать функцию через условный оператор ?
// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } else {
//       // ...
//       return confirm('Родители разрешили?');
//     }
//   }
//   checkAge();

//   function checkAge(age) {
//     return age > 18 ? true : confirm('Родители разрешили?');
//     }

// function checkAge(age) {
//     return age > 18 || confirm('Родители разрешили?');
//     }




// проверяем меньшее из чисел
// function min(a , b){
    
//     if(a < b ){
//         return a;
//     }
//     return b;

// }
// let result = min(1, 3);

// alert (result);

// через ?

// function min(a , b){
    
//    return a < b ? a : b;

// }
// alert(min(3, 5));

// 1-й вариант возведения в степень Math.pow(2,3)
// function pow(x,n){
//     return Math.pow(2,3);
// }
// alert (pow());

// 2-й вариант возведения в степень x**n
// function pow(x,n){
//     return x**n;
// }
// alert (pow(3,3));

// 3-й вариант возведения в степень *= x
// function pow(x, n) {
//   let result = x;

//   for (let i = 1; i < n; i++) {
//     result *= x;
//   }

//   return result;
// }

// let x = prompt("x?", '');
// let n = prompt("n?", '');

// if (n < 1) {
//   alert(`Степень ${n} не поддерживается, используйте натуральное число`);
// } else {
//   alert( pow(x, n) );
// }


// перевод простой функции в стрелочную

// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
//   }
  
//   ask(
//     "Вы согласны?",
//     function() { alert("Вы согласились."); },
//     function() { alert("Вы отменили выполнение."); }
    
// let ask = (question, yes, no) => confirm(question) ? yes() : no();

  
//    ask(
//     "Вы согласны?",
//      () => alert("Вы согласились."),
//      () => alert("Вы отменили выполнение.") 
//   );

// краткое содержание https://learn.javascript.ru/javascript-specials