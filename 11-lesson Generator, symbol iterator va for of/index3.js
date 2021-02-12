// 3-kod iterator yaratamiz
// gen() funksiyasi bo'ladi uni ichida n gacha i ni chiqaradi
// xuddi generator kabi ishlaydi

const iterator = {
    gen(n = 10) {
        let i = 0
        return {
            next () {
                if (i < n) {
                    return { value: ++i, done: false }
                }
                return { value: underfined, done: true } 
            }
        }
    }
}

const itr = iterator.gen()

// bu yerda const itr yaratyapmiz va iterator.gen() ni o'zlashtiryapmiz 
// consoleda itr.next ni chaqirsak endi generator kabi ishlashini ko'rishimiz mumkin