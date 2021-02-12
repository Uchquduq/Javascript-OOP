// Massiv
const people = [
    { name: 'Rufat', age: 22, budjet: 7000 },
    { name: 'Jahongir', age: 20, budjet: 5000 },
    { name: 'Javohir', age: 14, budjet: 1000 },
    { name: 'Orzumurod', age: 18, budjet: 5000 },
    { name: 'Shahzod', age: 22, budjet: 4000 },
    { name: 'Oydin', age: 22, budjet: 4000 }
]


// Find bizga kerak obyektni massivdan topib beradi
const igor = people.find(person => person.name === 'Rufat') // Rufat nomli elementni topib beradi
console.log(igor) // c:ga chiqaradi