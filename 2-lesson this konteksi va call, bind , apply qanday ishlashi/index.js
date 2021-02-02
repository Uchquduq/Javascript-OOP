// hello bu yerda window elementi
// this === window bu yerda true
// window bu yerda window obyekti
function hello() {
    console.log('Hello', this)
}

// sayHello ni hello orqali chaqirib olyapmiz
// logInfo funksiysasini yaratyapmiz
// this orqali qaysi obyekt ekanligini ko'rsatyapmiz
// console.logda group oraqali guruhlab chiqaryapmiz oxirida groupEnd qilib yopyapmiz
// job va phone ni berayapmiz
const person = {
    name: 'Rufat',
    age: 22,
    sayHello: hello,
    sayHelloWindow: hello.bind(document),
    logInfo: function(job, phone) {
        console.group(`${this.name} info:`)
        console.log(`Name is ${this.name}`)
        console.log(`Age is ${this.age}`)
        console.log(`Job is ${job}`)
        console.log(`Phone is ${phone}`)
        console.groupEnd()
    }
}

const lena = {
    name: 'Elena',
    age: 20
}

// 1-kod
/*const fnLenaInfoLog = person.logInfo.bind(lena)
fnLenaInfoLog('Front end', '+998932031100')*/

// 2-kod 
// fnLenaInfoLog() orqali oxirida funksiyani ishga tushiryapmiz

/*const fnLenaInfoLog = person.logInfo.bind(lena, 'Front end', '+998932031100')
fnLenaInfoLog()*/

// 3-kod
// bu yerda qchon xohlasak shu vaqtda ishga tushirayapmiz masalan oxiriga () belgini qo'yib funksiyani chaqiryapmiz.

/*person.logInfo.bind(lena, 'Front end', '+998932031100')()*/

// 4-kod
// bu yerda kodni call orqali ishga tushiryapmiz call() da oxiriga () qo'yib chaqirish shart emas u birdan ishga tushiradi.

/*person.logInfo.call(lena, 'Front end', '+998932031100')*/


// 5-kod
// Bu yerda apply() metodan foydalanyapmiz
// apply() ning call() dan farqi unda ikkinchi parametralar massivda beriladi []

person.logInfo.apply(lena, ['Front end', '+998932031100'])


// ------------->>>

const array = [1, 2, 3, 4, 5]

// bu oddiy funksiya buni pastda array ni protoipiga yozamiz barcha yerda import qilmay ishlatish uchun
  
/*function multBy(arr, n) {
    return arr.map(function(i) {
        return i * n
    })
}*/


// bu yerda massiv prototypeda multBy metodi yaratildi va endi buni istalgan massivda ishlatsak bo'ladi.

Array.prototype.multBy = function(n) {
    return this.map(function(i) {
        return i * n
    })
}

console.log(array.multBy(7))