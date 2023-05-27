"use strict"
/*
Переписати наступний код, використовуючи switch/case:
const input = +prompt('Enter a number from 1 to 4');
if (input === 1) {
    alert('Today is a good day to start something');
}
else if (input === 2) {
    alert('See your friend today');
}
else if (input === 3) {
    alert('Buy yourself something tasty today');
}
else if (input === 4) {
    alert('Do your HW today');
}
else {
    alert('Invalid number');
переписаний код має працювати ідентично
}
 */

const input = +prompt("Enter a number from 1 to 4")

switch (input) {
    case 1:
        alert("Today is a good day to start something")
        break
    case 2:
        alert("See your friend today")
        break
    case 3:
        alert("Buy yourself something tasty today")
        break
    case 4:
        alert("Do your HW today")
        break
    default:
        alert("Invalid number")
        break
}

/* 
Напишіть скрипт, який переводить години в секунди і має робити наступне:
--- запитати у користувача кількість годин;
--- порахувати, скільки секунд у цій кількості годин;
--- записати обчислене значення у змінну;
--- вивести цю змінну користувачеві через alert.
не забуваємо про валідацію того, що вводить користувач 
*/

const userQuestion = parseFloat(prompt("Specify the number of hours:"))

if (!userQuestion) {
    alert(`Invalid number`)
} else {
    let second = userQuestion * 60 * 60
    alert(`Second : ${second}`)
}
