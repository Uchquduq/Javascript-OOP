/* Rufat Hasanov //
//   27.01.2021  */


/* Javascriptda har bir element object hisoblanadi, har bir elementni prototypi bo'ladi, ya'ni _proto_ si bo'ladi.
Har bir elementni xususiyatlarini ko'rganda uni prototypeda nimalari borligini ko'rsatadi. 

Masalan, strga kirganda uning birinchi _proto_ sida Stringga tegishli length va boshqa metodlari bor, keyingi _proto_siga kirganga umumiy Objectga tegishli sayHello() metodi kelib chiqadi.

Person ni birinchi prototypeda name, age, greet() funksiyalari chiqadi, undan keyingi pog'onadagi _proto_ siga kirsak Object ga tegishli bo'lgan metodlar kelib chiqadi. Masalan toString() shu kabilar. */

const person = new Object({
    name: 'Rufat',
    age: 22,
    greet: function () {
        console.log('Greet!')
    }
})

Object.prototype.sayHello = function () {
    console.log("Hello!")
}

const Barno = Object.create(person)
Barno.name = 'Barno'

const str = new String('I am string')