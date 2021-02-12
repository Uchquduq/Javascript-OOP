// 4-kod for of ishlashiga misol
// for of lar symbol ma'lumot turi bilan ishlaydi
// bitta bitta bizga H e l l o qilib chiqarib beradi 

for (let k of 'Hello') {
    console.log(k)
}



// bu yerda esa massiv bilan ishlashi

for (let m of [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]) {
    console.log(m)
}

// massiv elementlarini bitta-bitta chiqarib beradi



// keyingi kodda symbol orqali ulash va iteratorni for of orqali ishalatish

const iterator = {
    [Symbol.iterator](n = 10) {
        let i = 0
        return {
            next() {
                if (i < n) {
                    return { value: ++i, done: false }
                }
                return { value: underfined, done: true }
            }
        }
    }
}

for (let s of iterator) {
    console.log(s)
}

// tepadagi iteratorni chaqiryapmiz