"use strict"
/*
Треба реалізувати просту програму з наступними умовами:
--- За допомогою prompt запитати ім'я користувача.
--- За допомогою alert вивести "Hello, John! How are you?" , де John це те, що ввів користувач
--- Врахувати варіанти, коли користувач нічого не ввів або відмінив увід (наприклад показати 
повідомлення про помилку або показати повідомлення Hello, noname! How are you?)
 */
const userName = prompt("What is your name:")
const userGuest = "Guest"

if (userName === null) {
    alert(`Good bay, ${userGuest}!`)
} else if (userName.trim()) {
    alert(`Hello, ${userName}! How are you?`)
} else if (userName.trim() === "") {
    alert(`Hello, ${userGuest}! Name can't be empty!`)
}
