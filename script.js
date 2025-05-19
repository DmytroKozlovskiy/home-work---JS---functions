/* Напиши всі можливі варіанти створення функцій.

Function Declaration  */
function add(a, b) {
  return a + b;
}
// Function Expression

const multiply = function(a, b) {
  return a * b;
};

// Arrow Function
const subtract = (a, b) => a - b;

// Створи функцію, яка буде виводити кількість переданих їй аргументів.

function arguments(a, b, c) {  
  return arguments.length;
}

/* Напиши функцію, яка приймає 2 числа і повертає :
-1, якщо перше число менше, ніж друге; 
1 - якщо перше число більше, ніж друге; 
0 - якщо числа рівні. */
function compare(a, b) {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  } else {
    return 0;
  }
}

// Напиши функцію, яка обчислює факторіал переданого їй числа.
function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

/* Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число. Наприклад: цифри 1, 4, 9 перетворяться в число 149. */
function makeNumber(a, b, c) {
  return a * 100 + b * 10 + c;
}
console.log( makeNumber(1, 4, 9) )

/* Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу. Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата. */
function getRectangleArea(a, b) {
  if (b === undefined) {
    b = a;
  }
  return a * b;
}
console.log( getRectangleArea(5, 4) )

// Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”. Досконале число - це число, яке дорівнює сумі всіх своїх дільників.
function isPerfectNumber(num) {
  let sum = 0;
  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      sum += i;
    }
  }
  return sum === num;
}

/* Напиши функцію, яка приймає мінімальне і максимальне значення для діапазону, і виводить тільки ті числа з діапазону, які є досконалими. Використовуй написану раніше функцію, щоб дізнатися, чи є це число досконалим. */

function printPerfectNumbers(min, max) {
  for (let i = min; i <= max; i++) {
    if (isPerfectNumber(i)) {
      console.log(i);
    }
  }
}