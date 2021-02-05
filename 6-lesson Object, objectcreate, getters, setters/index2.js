const person = Object.create(
    {},
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
        }
    }
)

person.name = 'Maxim' // writeble yoqilganda name Maxim ga o'zgaradi

/* consoleda delete.person.name qilsak true bo'ladi configurable true bo'lsa */

for (let key in person) {
    console.log('Key: ', key, person[key])
}