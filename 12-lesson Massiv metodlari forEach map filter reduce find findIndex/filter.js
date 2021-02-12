// Massiv
const people = [
    { name: 'Rufat', age: 22, budjet: 7000 },
    { name: 'Jahongir', age: 20, budjet: 5000 },
    { name: 'Javohir', age: 14, budjet: 1000 },
    { name: 'Orzumurod', age: 18, budjet: 5000 },
    { name: 'Shahzod', age: 22, budjet: 4000 },
    { name: 'Oydin', age: 22, budjet: 4000 }
]

// Filter
// Filter saralash uchun ishlatiladi saralb yangi massiv hosil qilib beradi


// 1-kod
const adults = []
for (let i = 0; i < people.length; i++) {
    if (people[i].age >= 18) {
        adults.push(people[i])
    }
}
console.log(adults) // Massivdan yoshi katta odamlarni ajratib olib yangi massiv hosil qilayapti

// 2-kod filterdan foydalanib qilamiz ES6da
const adults = people.filter(person => {
    if(person.age >= 18) {
        return true
    }
}) // Massivdan yoshi katta odamlarni ajratib olib yangi massiv hosil qilayapti

// 3-kod xuddi shu yana oddiyroq
const adults = people.filter(person => person.age >= 18)
console.log(adults)


