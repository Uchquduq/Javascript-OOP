const delay = ms => {
    return new Promise(resolve => setTimeout(() => resolve(), ms)) // resolve qiladi settimeout vaqt o'tgandan keyin
}

const url = 'http://jsonplaceholder.typicode.com/todos' // url o'zgaruvchini yaratib olamiz fetch qilgani ishlatiladi todolarni

// bu kodda async dan foydalanamiz funksiayda await dan foyalansak bunday funksiya async qiloib yoziladi
// agarda biz asinc=xron kodaan foyadalanmoqchi bo'lsak yanig formatda u holda qanadir logikani bunda asyncdan foydalanamiz
// await bir necha promiselarni bajarilishini kutadi

async function fetchAsyncTodos() {
    await delay(2000) // delay promise qaytargani uchun biz then ishlatardik buning o'rniga bu yerda biz await dan foydalanamiz, shu promise bajarilmasa biz keyingi qatordagi kodni bajara olmaymiz, aynan shuni await bajaradi
    const response = await fetch(url) // fetch bizga promise qaytaradi await operatori biga buni avtomatik ravishda bajargani yordam beradi, lekin bu yerda response qilingani uchun uni sal bshqacharoq yozamiz const qilib
    const data = await response.json() // response json metodi bizga promise qaytaradi shuning uchun biz bu yerda uni kutshishimiz kerak, bu data olamiz response.josn metodidan
    console.log('Data: ', data) // bu yerda datani consolga chiqaramiz
}

fetchAsyncTodos() // bu yerda tepadagi funksiyani ishga tushiryapmiz


// avvallari async ishlatlilmagan bizga bu babel paydo bo'lgandan keyin kirib kelgan, babel bu kodni promisega aylantirib chiqib kodni eskicha kodga aylantirib brauser tushinadigan tilga aylatirib beradi,
// async dan foydalanganimizda biz callbacklardan qutilamiz, kodimiz tushunarli va chiroyli chiqadi