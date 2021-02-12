// 2-kod 
// sonlarni qaytaruvchi generator
// numGenerator yaratdik uning doimiy holatda n = 10 yoki o'zgartirsak bo'ladi
// let i = 0 qilib uni n gacha qilib olayaomiz 
// va yield orqali porsiyaga bo'lib chiqarib beradigan qilayapmiz


function* numGenerator(n = 10) {
    for (let i = 0; i < n; i++) {
        yield i
    }
}

const num = numGenerator(17) // bu yerda n = 17 qilib olyapmiz

// num.next() qilib funksiyani chaqirayapmiz va bizga porsiyaga bo'lib birinchi 0 ni chiqaradi done: false bo'ladi
// oxirgi num.next() ni chaqirsak bizga value: 16 va done: false qaytaradi undan keyin chqirganlarimiz value: underfined va done: true qaytaradi mana shu porsiyaga bo'lib natija berishi generatorning asosiy ma'nosi 