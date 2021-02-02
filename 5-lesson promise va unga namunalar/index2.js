// 2-kod bu yerda const p qilib promise yaratilyapti promiseda resolve va reject bo'ladi,
// resolve qchonki asinxron operatsiya muvaffaqqiyatli yakunlansa chaqiriladi

console.log("Request data...")

const p = new Promise(function(resolve, reject) {
    setTimeout(() => {
        console.log('Prepairing data...')
        const backendData = {
        server: 'aws',
        port: 2000,
        status: 'working'
        }
        resolve(backendData)
    }, 2000)
})

// then hamma operatsiya bajarilgandan so'ng resolve bajarilsa shundan keyin ishga tushadi va chaqiriladi
// data ni then orqali qabul qilish uchun avval uni resolve orqali uzatib yuboramiz.
// bu yerda p2 yangi promise yaratib olyapmiz

p.then(data => {
    const p2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            data.modifired = true
            resolve(data)
        }, 2000)
    })

    p2.then(clientData => {
        console.log('Data received', clientData)
    })
})