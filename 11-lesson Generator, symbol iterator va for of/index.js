// 1-kod Generator funksiya
// Generator funksiyalar * bilan yoziladi
// Generatorlar natijani bizga porsiyalarga bo'lib beradi
// yield - natija qaytaradi
// bu generatorning prototipi generator va .next() metodi bor
// .next chaqirilganga done: false qilib qaytaradi yieldlar tugagandan keyin done: true qaytaradi valueda H va o gacha qaytaradi tugagandan so'ng underfined qaytaradi
function* strGenerator() { 
    yield 'H'
    yield 'e'
    yield 'l'
    yield 'l'
    yield 'o'
}

const str = strGenerator()

// consoleda str.next() qilib ishlatiladi va value: "H", done: false olamiz