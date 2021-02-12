// Massiv
const people = [
    { name: 'Rufat', age: 22, budjet: 7000 },
    { name: 'Jahongir', age: 20, budjet: 5000 },
    { name: 'Javohir', age: 14, budjet: 1000 },
    { name: 'Orzumurod', age: 18, budjet: 5000 },
    { name: 'Shahzod', age: 22, budjet: 4000 },
    { name: 'Oydin', age: 22, budjet: 4000 }
]

// FindIndex
const rufatIndex = people.findIndex(person.name === 'Rufat')
console.log(rufatIndex) // Indexsini chiqarib beradi


// Hammasini birdab ishlatamiz
const newPeople = people
.filter(person => person.budget > 3000) // budgeti 3000 dan ko'plarni hisoblab chiqayapti
.map(person => {
    return {
        info: `${person.name} (${person.age})`,
        budget: person.budjet
    } // yangi massiv yaratyapti
})
.reduce((total, person) => total + person.budget, 0) // personlarni budjetini hisoblayapti

console.log(amount) // personlarni 3000 dan kattalarini umumiy budgetini chiqarayapti