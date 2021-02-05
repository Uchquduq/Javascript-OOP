// Promise qaytaruvchi funksiya berilgan vaqtimizda bajaradi delay(ms) orqali bir necha sekund zaderjka qiladi

const delay = ms => {
    return new Promise(resolve => setTimeout(() => resolve(), ms)) // resolve qiladi settimeout vaqt o'tgandan keyin
}

// tepadagi funksiyani chaqariyapmiz vaqt 2 sec degan xabar chiqadi
/*
delay(2000).then(() => console.log('2 sec'))
*/

// aylaylik biz serverga asinxron so'rov jo'natmoqchimiz va javob olmoqchimiz, bir necha sekund kutadigan qilmoqchimiz Buni JSONPlaceholder(bu feykoviy Rest Api online servis) sayti orqali qilib ko'rishimiz mumkin Rest Api beradi

const url = 'http://jsonplaceholder.typicode.com/todos' // url o'zgaruvchini yaratib olamiz fetch qilgani ishlatiladi todolarni

function fetchTodos() {
    console.log('Fetch todo started...')
     return delay(2000)
        .then(() => {
            return fetch(url) // fetch promise orqali serverga murojaat qilish uchun ihslatiladi
    })
    .then(response => response.json)
}


fetchTodos()
    .then(data => {
        console.log('Data: ', data)
    })
    .catch(e => console.error(e))

// xuddi shu ishni keyingi kodda async orqali qilamiz