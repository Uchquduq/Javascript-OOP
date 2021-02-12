// Massiv
const people = [
    { name: 'Rufat', age: 22, budjet: 7000 },
    { name: 'Jahongir', age: 20, budjet: 5000 },
    { name: 'Javohir', age: 14, budjet: 1000 },
    { name: 'Orzumurod', age: 18, budjet: 5000 },
    { name: 'Shahzod', age: 22, budjet: 4000 },
    { name: 'Oydin', age: 22, budjet: 4000 }
]


// Map
// forEachga o'xshaydi lekin boshqacharoq ishlaydi u yordamida yangi massiv yaratsak bo'ladi obyektlarni o'zgartirsak transformatsiya qilsak bo'ladi


// 1-kod oddiy kod 
const newPeople = people.map(person => {
    return 'Hello'
})
console.log(newPeople) // Bizga 6 Hello elementidan iborat massiv qaytaradi lekin bu uncha ishlatilmaydi


// 2-kod
// Obyektlarni ismidan iborat massiv hosil qilyapmiz
const newPeople = people.map(person => {
    return person.name
})
console.log(newPeople) // ismlardan iborat massiv hosil bo'ldi


// 3-kod
const newPeople = people.map(person => `${person.name} ${person.age}`)
console.log(newPeople) // obyekt ismi va yoshlaridan iborat massiv hosil qiladi


// 4-kod
const newPeople = people.map(person => person.age * 3)
console.log(newPeople) // yoshlarni 3 gako'paytirib yanig massiv hosil qiladi
