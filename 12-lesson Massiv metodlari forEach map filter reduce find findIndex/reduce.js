// Massiv
const people = [
    { name: 'Rufat', age: 22, budjet: 7000 },
    { name: 'Jahongir', age: 20, budjet: 5000 },
    { name: 'Javohir', age: 14, budjet: 1000 },
    { name: 'Orzumurod', age: 18, budjet: 5000 },
    { name: 'Shahzod', age: 22, budjet: 4000 },
    { name: 'Oydin', age: 22, budjet: 4000 }
]

// Reduce
// Reduce final natija olish uchun ishlatiladi masalan yoshlar yig'indisi yoki maoshlarniki

// 1-kod 
const amount = 0 // amount summa yaratilyapti 0 so'm
for (let i = 0; i < people.length; i++) { // massiv bo'ylab yurayapti
    amount += people[i].budjet // peoplelarni budjetdagi mablag'ni amount qo'shib ketayapti
}
console.log(amount) // barcha budjetlar yig'indisi


// 2-kod
const amount = people.reduce((total, person) => {
    return total + person.budjet
}, 0 /* total oylik chiqaradi 0 dan boshlanadi*/)
console.log(amount)


// 3-kod
amount = people.reduce((total, person) => total + person.budjet, 0)
console.log(amount)