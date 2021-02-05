// bu oddiy obyekt
/*
const animal = {
    name: 'Animal',
    age: 5,
    hasTail: true
}
*/

// bu bosh klass
class Animal {
    static type = 'ANIMAL' // static type faqat e'lon qilingan klassda ishlaydi masalan con: Animal.type out: ANIMAL

    constructor(options) { // bosh klass konstructori bu yerga klass name agelari e'lon qilinadi
        this.name = options.name
        this.age = options.age
        this.hasTail = options.hasTail
    }

    voice() { // bosh klass metodlaridan biri
        console.log('I am animal!')
    }
}

// yangi obyekt yaratildi Animal klassidan foydalanib
/*
const animal = new Animal ({
    name: 'Animal',
    age: 5,
    hasTail: true
})
*/

class Cat extends Animal {
    static type = 'CAT'

    constructor(options) {
        super(options) // cat color yo'q edi uni qo'shish uchun super(options) dan foydalandik
        this.color = options.color // color optionsga qo'shildi
    }

    voice() {
        super.voice() // Animaldagi voice super.voice() qilib qo'shilsa ishlaydi
        console.log('I am cat!') // bu yangi cat voice()
    }

    get ageInfo() { // get parametri necha yosh ekanligini chiqarib beradi
        return this.age * 7
    }

    set ageInfo(newAge) { // setda yangi yoshi kiritiladi
        this.age = newAge
    }
}

const cat = new Cat ({
    name: 'Cat',
    age: 7,
    hasTail: true,
    color: 'black' // bu yerda cat color qo'shilyapti lekin u bosh klassda color yo'q u bosh klassda qo'shilishi uchun biz cat classida 
    // constructor(options) { super(options) this.color = options.color }
    // qilib qo'shamiz
})


