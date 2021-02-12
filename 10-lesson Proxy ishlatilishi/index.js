// 1-kod Wrapper 
// proxy yaratyapmiz default 0 ga teng
const withDefaultValue = (target, defaultValue = 0) => {
    return new Proxy(target, {
        get: (obj, prop) => (prop in obj ? obj[prop] : defaultValue) // agar qiymat bo'lsa o'zi bo'lmasa default qiymat qaytaradi
    })
}

const position = withDefaultValue (
    {
    x: 24,
    y: 42
    },
    0
) // bu yerda position yaratyapmiz withDefaultdan foydalanib

console.log(position) // Proxy x va y qiymat chiqaradi



// 2-kod Hidden properies

const withHiddenProps = (target, prefix = '_') => { // yangi Proxy yaratyapmiz
    return new Proxy = (target, {
        has: (obj, prop) => obj in prop && !prop.startsWith(prefix), // obj ni ichida prop borligini tekshiryapmiz
        ownKeys: obj = Reflect.ownKeys(obj)// Reflect ownkeys - massivni kalitlarini ko'rsatib beradi
        .filrter(p => !p.startsWith(prefix)), // filter qilyapmiz boshlanishi prefixdan boshlanayaptimi deb true or false
        get: (obj, prop, receiver) => (prop in receiver) ? obj[prop] : void 0 // receiverda prop borligi tekshirilyapti bo'lsa obj prop bo'lmasa underfined topshiradi void 0
    })
}

const data = withHiddenProps ({
    name: 'Rufat',
    age: 22,
    _uid: '7777777'
})


// 3-kod Optimization

const IndexedArray = new Proxy(Array, {
    construct(target, [args]) {
        const index = {}
        args.forEach(item => (index[item.id] = item))

        return new Proxy(new target(...args), {
            get(arr, prop) {
                switch (prop) {
                    case 'push':
                        return item => {
                            index[item.id] = item
                            arr[prop].call(arr, item)
                        }
                    case 'findById':
                        return id => index[id]
                    default:
                        return arr[prop]
                }
            }
        })
    }
})

const users = new IndexedArray([
    { id: 11, name: 'Rufat', job: 'Full Stack', age: 22},
    { id: 22, name: 'Jahongir', job: 'Front End', age: 20},
    { id: 33, name: 'Orzumurod', job: 'Back end', age: 18},
    { id: 44, name: 'Javohir', job: 'King', age: 14}
])