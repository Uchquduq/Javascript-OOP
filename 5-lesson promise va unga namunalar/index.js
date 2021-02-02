// 1-kod request data chiqaradi keyin asinxron funksiyalar bajariladi setTimeout Prepairing data... keyin Data received qilib ma'lumotni chiqaradi
console.log("Request data...")

setTimeout(() => {
    console.log('Prepairing data...')

    const backendData = {
        server: 'aws',
        port: 2000,
        status: 'working'
    }

    setTimeout(() => {
        backendData.modifired = true
        console.log('Data received', backendData) // bu yerda ma'lumot uzatilyapti
    }, 2000)
}, 2000)


