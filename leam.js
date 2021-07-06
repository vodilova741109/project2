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


let message = (login == 'Сотрудник') ? 'Привет' :
(login == 'Директор') ? 'Здравствуйте' :
(login == '') ? 'Нет логина':
'';