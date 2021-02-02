// 1-kod zamikaniya
/*function createCalcFunction(n) {
    return function() {
        console.log(1000 * n)
    }
}*/

// 2-kod
// bunaqa qilib yozsak hech qanday natija olmaymiz

/*createCalcFunction(42)*/

// 3-kod
// bu kodda const calc qilib funksiyani yaratamiz va qiymat berib calc() qilib funksiyani chaqiramiz va natija chiqadi

/*function createCalcFunction(n) {
    return function() {
        console.log(1000 * n)
    }
}
const calc = createCalcFunction(42)
calc()*/

// 4-kod 
// bu kodda incrementpr ga n va ichkaridagi funcsiyaga num beryapmiz bu incrementor bu yerda zamikat bo'lyapti

function createIncrementor(n) {
    return function addOne(num) {
        return n + num
    }
}

const addOne = createIncrementor(1)
const addTen = createIncrementor(10)

console.log(addOne(10))
console.log(addOne(40))

console.log(addTen(10))
console.log(addTen(40))

// 5-kod 
// Bu yerda zamikaniyani amaliyotda ishlatilihisni ko'rsatib beraman bu yerda url Generator taxlab ko'rsatdik

function urlGenerator(domain) {
    return function(url) {
        return `http://${url}.${domain}`
    }
}

const comUrl = urlGenerator('com')
const uzUrl = urlGenerator('uz')

console.log(comUrl('google'))
console.log(uzUrl('prava'))

