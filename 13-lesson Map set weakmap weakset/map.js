// obyekt yaratib olamiz
const obj = {
    name: 'Rufat',
    age: 22,
    job: 'Fullstack'
}

// Massiv yaratib olamiz
const entries = [
    ['name', 'Rufat'],
    ['age', 22],
    ['job', 'Fullstack']
]
 
// Obyektni enstriesdagi kabi massivga aylantirish
/*
console.log(Object.entries(obj))
*/
// entries metodi massivga aylantiradi

// Massivni obyektga aylantirish
/*
console.log(Object.fromEntries(entries))
*/
// fromEntries metodi massivni obyektga aylantirayapti


// Map
// 1-kod map yaratamiz
/*
const map = new Map(entries) // entriesni beryapmiz mapga keyin bizga/
// {'name' => 'Rufat', 'age' => '22', 'job' => Fullstack'} qilib qaytaradi name-kalit Rufat-value
console.log(map)
*/


// 2-kod
// yaratilgan mapdan get orqali key orqali valueni olamiz
/*
const map = new Map(entries)
console.log(map.get('job'))
// c:ga Fullstack chiqaradi
*/


// 3-kod
// set mapga yangi key va valuedan iborat element qo'shadi
/*
const map = new Map(entries) // entriesdan iborat map yaratilyapti
map.set('newField', 42) // mapga yangi element qo'shildi
.set(obj, 'Value of object') // mapga key obyekt bo'lgan element qo'shsa ham bo'ladi
.set(NaN, 'NaN valuesi') // map key NaN bo'lgan element qo'shdik
console.log(map.get(NaN)) // consolega key NaN bo'lgan value chiqardik c: NaN valuesi
*/



// 4-kod
// map metodlari
/*
console.log(map.delete('job')) // mapni 'job' kalitli elementini o'chiradi
console.log(map.has('job')) // mapni 'job' kalitli elemnti bor yoki yo'qligini aniqlab beradi true yoki false
console.log(map.size) // mapni nechta elementi borligini ko'rsatadi
console.clear() // mapni butunlay tozalab tashlaydi
*/


// ===========================

// 5-kod massiv qilib chiqarish
/*
for (let entry of map.entries()) {
    console.log(entry)
} // massiv qilib chiqaradi bitta bitta

for (let [key, value] of map) {
    console.log(key, value)
} // key va valueni o'zini chiqaradi
*/


// 6-kod faqat key yoki valuelarni chiqarish
/*
for (let val of Map.values()) {
    console.log(val)
} // faqat valuelarni chiqaradi

for (let key of map.keys()) {
    console.log(key)
} // faqat key ya'ni kalitlarni chiqaradi
*/


// 7-kod 
// forEach
/*
map.forEach((val, key, m) => {
    console.log(val, key)
}) // massiv bo'ylab yurib val va keylarni chiqarib beradi
*/


// 8-kod
// Mapdan  yangi massiv yaratish
/*
const array = [...map]
console.log(array) // yangi array yaratadi
*/
// yoki bunday qilsak ham bo'ladi
/*
const array = Array.from(map)
console.log(array)
*/


// 9-kod
// map ni yangi obyektga aylantiramiz
/*
const mapObj = Object.fromEntries(map.entries())
console.log(mapObj) // yangi obyekt lekin obyektni ichida yana obyekt bo'la olmasligi uchun
*/
// c:da bizga quyidagicha natija chiqaradi '[Object Object]' 'Value of object' bo'ladi


// ========================
// Map ning asosiy ishlatiladigan vaziyatlar
// 10-kod
// yangi obyekt yaratamiz userlarga oxirgi kirgan vaqtlarini kiritamiz
/*
const users = [
    {name: 'Elena'},
    {name: 'Alex'},
    {name: 'Rufat'}
]

const visits = new Map()

visits
    .set(users[0], new Date())
    .set(users[0], new Date( new Date().getTime() + 1000 * 60))
    .set(users[0], new Date( new Date().getTime() + 5000 * 60))

function lastVisit(user) {
    return visits.get(user)
}

console.log(lastVisit(users[2])) // user 3 ni oxirgi kirgan vaqtini chiqarayapmiz
*/