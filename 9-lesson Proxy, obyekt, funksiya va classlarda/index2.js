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

    get(target, prop) {
        if (!(prop in target)) { // kiritgan prop taget broligini tekshiradi
            return prop
                .split('_') // console: op.name_age_jog, output: "Rufat 22 Fullstack"
                .map(p => target[p])
                .join(' ') // bir-biriga ulaydi
        }
        return target[prop]
    },

    set(target, prop, value) {
        if (prop in target) {
            target[prop] = value
        } else { 
            throw new Erro(`No ${prop} field in target`)
        }
    },

    has(target, prop) {
        return ['age', 'name', 'job'].includes(prop)
    },

    deleteProperty(target, prop) {
        console.log('Delete property...', prop)
        delete target[prop]
        return true
    }

})

