// Bu darsda proxy teoriyasi bilan tanishamiz
// proxy - bu javascript classi bo'lib obyekt, funksiya, classlarga lovushka taxlash uchun ishlatiladi

// oddiy obyekt yaratamiz
const person = {
    name: 'Rufat',
    age: 22,
    job: 'Fullstack'
}



// obyektlarda proxy

// bu obyekt proxy qilamiz const op yaratamiz
// bu proxy ga biz necha parametr berishimiz kerak bulardan biri target 
// biz proxyni person ga yaratmoqchimiz shuning uchun qavs ichiga person yozamiz
// ikkinchi parametr bu hendlerlar , {} ichiga yozamiz 
const op = new Proxy(person, {
    // obyekt uchun lovushkalar masalan get
    get (target, prop) {
        console.log('Target', target) // target da person obyektini o'zini olamiz   
        console.log('Prop', prop) // biz murojaat qilayotgan joy nomi
        console.log(`Getting prop ${prop}`)
        return target[prop] 
    }, // console: op.name, output: "Rufat", console: op.age, output: 22

    set(target, prop, value) {
        if (prop in target) { // bu yerda biror bir prop ni kiritib, bormi deb tekshirayapmiz targetni ichida va bor bo'lsa uni kiritganimizga value ga o'zgartiradi masalan age ni 25 ga o'zgartiramiz
            target[prop] = value
        } else {  // agarda prop no'lmasa error qilib chiqaradi
            throw new Erro(`No ${prop} field in target`) 
        }
    },
 
    has(target, prop) { // biror bir name age borligini tekshiradi person ni ichida
        return ['age', 'name', 'job'].includes(prop)
    },

    deleteProperty(target, prop) { // delete property name age larni o'chiradi
        console.log('Delete property...', prop)
        delete target[prop] // propertyni o'chirayapti
        return true // bajarilsa true qaytaradi
    }

})




// Funksiyalarda proxy 

// const log funksiya yaratib olamiz

const log = text => `Log: ${text}`

// funksiya proxy
// bu yerda target - funksiyaning o'zi
// thisArg - text
// args - massiv bu barcha parametrla, log funksiyasida bitta tekst elementi ni olyapmiz 
const fp = new Proxy(log, {
    apply(target, thisArg, args) {// hendlerlar obyekti
        console.log('Calling fn...')

        return target.apply(thisArg, args).toUpperCase()// bu yerda natija olamiz bava uni qaytaramiz
    }
})


// Classlarda proxy

// Person obyekt yaratildi
class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}

// Person classining Proxysi yaratildi
const PersonProxy = new Proxy (Person, {
    construct(target, args) {
        console.log('Construct...')

        return new Proxy(new target(...args), {
            get(t, prop) { // yangi target obyektini massivlari bilanqaytaryapmiz, target bu yerda person
                console.log(`Getting prop "${prop}"`)
                return t[prop]
            }
        })
    }
})

const p = new PersonProxy('Maxim', 30) 