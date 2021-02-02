// 4-kod
console.log('Request data...')

// setTimeoutga istalgan vaqt bera olishimiz mumkin ms orqali 

const sleep = ms => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), ms);
    })
}

//sleep(2000).then(() => console.log('After 2 sec'))
//sleep(5000).then(() => console.log('After 5 sec'))

// all barcha promiselar bajarilgan deyapti

Promise.all([sleep(2000), sleep(5000)]).then(() => {
    console.log('All promises')
})

// race birinchisi bajarildi deyapti

Promise.race([sleep(2000), sleep(5000)]).then(() => {
    console.log('Race promises')
})