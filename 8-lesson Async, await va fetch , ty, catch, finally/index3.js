const delay = ms => {
    return new Promise(resolve => setTimeout(() => resolve(), ms)) // resolve qiladi settimeout vaqt o'tgandan keyin
}

const url = 'http://jsonplaceholder.typicode.com/todos' // url o'zgaruvchini yaratib olamiz fetch qilgani ishlatiladi todolarni


// endi bu yerda try catch finallaydan foydalanamiz
// try mufaqqaiyatli bajarilgan ishlaydi
// catch biror-bir muammo, xatolik kelib chiqsa ishlaydi
// finally xato bo'lsa ham, to'g'ri bo'lsa ham ishlaydi

async function fetchAsyncTodos() {
    try {
        await delay(2000)
        const response = await fetch(url)
        const data = await response.json()
        console.log('Data: ', data)
    } catch (e) {
        console.log(e)
    } finally {

    }
}
    

fetchAsyncTodos()