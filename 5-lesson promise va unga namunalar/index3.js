// 3-kod

console.log('Request data...')

const p = new Promise(function (resolve, reject) {
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


.then(clientData => {
    clientData.fromPromise = true
    return clientData
})
.then(data => {
    console.log('Modifired', data)
})

// Error yuz berganda bajariladi 

.catch(err => console.error('Error: ', err))


// finally promise oxirida error bo'lsa ham bo'lmasa ham bajariladi oxirida bajariladi

.finally(() => console.log('Finally'))