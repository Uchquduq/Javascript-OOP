const person = Object.create(
    {
        calculateAge() { // bu yangi index4.js: bu yerda calculateAge metodi yaratilyapti bu prototipida paydo bo'ladi
            console.log('Age:', new Date().getFullYear() - this.birthYear)
        }
    },
    {
        name: {
            value: 'Rufat', // kalitlar
            enumerable: true, // endi sanaladigan va ko'rinadigan bo'ldi massivda 
            writable: true, // endi o'zgartirish kiritsa bo'ladigan bo'ldi
            configurable: true // endi manipulyatsiya qilsa bo'ladigan bo'ldi, yani o'chirsak bo'ladi
        },
        birthYear: {
            value: 1998, // kalitlar
            // bu yerda oddiy holatda enumarable: false holatda turibdi
            enumerable: false,
            writable: false,
            configurable: false
        },
        age: {
            get() { // get bu yerda funksiya bo'lsa ham obyekt bo'lib paydo bo'ladi bu yerda yilidan nechinchiyil ekanligini aniqlab ko'rsatyapti
                return new Data().getFullYear() - this.birthYear
            },
            set(value) { // valuega 100 bersak 100 ni chiqaradi lekin age o'zgarmaydi
                document.body.background = 'red' // body background rangi set ni chaqirganda qizilga o'zgaradi
                console.log('Set age', value)
            }
        }
    }
)

//person.name = 'Maxim' // writeble yoqilganda name Maxim ga o'zgaradi

/* consoleda delete.person.name qilsak true bo'ladi configurable true bo'lsa */


// index4.js: endi bu yerda prototipdagilarni hamchiqaradi shuning uchun prototipdan yurmaslik uchun kodni o'zgartiramiz
/* eski kod: 
for (let key in person) {
    console.log('Key: ', key, person[key])
}*/

for (let key in person) {
    if (person.hasOwnProperty(key)) {
        console.log('Key', key, person[key])
    }
}