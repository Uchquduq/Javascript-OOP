class Component {
    constructor(selector) {
        this.$el = document.querySelector(selector) // $ belgisi DOM ning biror-bir Node ga murojaat qilish uchun ishlatiladi
    }

    hide() {
        this.$el.sytle.display = 'none' // element style o'zgartirilyapti va display none qilib ko'rsatmaydigan qilib qo'yayapti
    }

    show() {
        this.$el.style.display = 'block' // bu yerda display block qilib ko'rstadigan qilyapti
    }
}


class Box extends Component { // Component classidan foydalanib Box classini yaratyapmiz
    constructor(options) {
        super(options.selector) // super qilib sizeni va colorni qo'shib olyapmiz

        this.$el.style.width = this.$el.style.height = options.size + 'px'
        this.$el.style.background = options.color
    }
}

const box1 = new Box({ // Box classidan foydalanib box1 obyektini yaratyapmiz
    selector: '#box1',
    size: 100,
    color: 'red'
})

const box2 = new Box({
    selector: '#box2',
    size: 120,
    color: 'blue'
})

class Circle extends Box { // Box classi orqali Circle classni yaratyapmiz
    constructor(options) {
        super(options) // super options qilib border-radiusni qo'shib olyapmiz

        this.$el.style.borderRadius = '50%'
    }
}

const circle = new Circle({ // Circle classidan foydalanib circle obyektini yaratyapmiz
    selector: '#circle',
    size: 90,
    color: 'green'
})