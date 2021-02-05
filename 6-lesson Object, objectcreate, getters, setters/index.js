// person Obyekti yaratdik
// Object createdan foydalanib
// Lekin for orqali sanaganimizda ularni sanamaydi chunki ularda enumerable: false holatda turibdi

const person = Object.create(
    {},
    {
        name: {
            value: 'Rufat' // kalitlar
        },
        birthYear: {
            value: 1998 // kalitlar
        }
    }
)

for (let key in person) {
    console.log('Key: ', key, person[key])
}