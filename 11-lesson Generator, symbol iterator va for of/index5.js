// 5-kod bu yerda biz generatorlarning for of bilan bog'liqlik tomonlarini ko'rib chiqamiz

function* iter(n = 10) { // bu yerda iter generator yaratyapmiz
    for (let i = 0; i < 10; i++) { // i ni n gacha oshirib borayapmiz porsiyaga bo'lib yield orqali
        yield i
    }
}

for (let k of iter(6)) { // bu yerda tepadagi generatorni chaqarib for of orqali har bir o'zgaruvchisi bilan bitta-bitta ishlayapmiz va ustida amal bajarayapmiz
// for of ning generatorga bog'liqlik jihati shunda
    console.log(k) // consolega k ni chiqarayaomiz u esa generatorning elementi
}