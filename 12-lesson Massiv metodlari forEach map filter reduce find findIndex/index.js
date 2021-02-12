// Massiv
const people = [
    { name: 'Rufat', age: 22, budjet: 7000 },
    { name: 'Jahongir', age: 20, budjet: 5000 },
    { name: 'Javohir', age: 14, budjet: 1000 },
    { name: 'Orzumurod', age: 18, budjet: 5000 },
    { name: 'Shahzod', age: 22, budjet: 4000 },
    { name: 'Oydin', age: 22, budjet: 4000 }
]

// Oddiy holatda iteratsiya qilish
for (let i = 0; i < people.length; i++) {
    console.log(people[i])
} // c:ga people massivini elementlarini chiqarib beradi

// For of bilan iteratsiya qilish
for (let person of people) {
    console.log(person)
} // tepadagi ishni for of bilan yangi ES6 dagi ko'rinishi


// Foreach
// 1-kod oddiy kod bilan qilish
// bu metodning funksiya parametri bor
// funksiyada 3 parametr bor person-massivning har bir obyekti, index va pArr-people massivining o'zi

people.forEach( function(person, index, pArr) {
    console.log(person) // obyektni chiqaradi
    console.log(index) // obyekt indexsini chiqaradi
    console.log(pArr) // massivni o'zini chiqaradi
})

// 2-kod
people.forEach(function (person) {
    console.log(person) // obyektni chiqaradi
})

// 3-kod
// 2-kodni ES6 dagi ko'rnishi
people.forEach(person => console.log(person))
// bu ham massiv obyektlarini chiqaradi

// Map

// Filter

// Reduce

// Find

// FindIn