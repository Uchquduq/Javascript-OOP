// 6-kod
/* O'zingizni bind funsiyangizni yozing
   Masalan:

   function logPerson() {
       console.log(`Person : ${this.name}, ${this.age}, ${this.job}`)
   }

   const person1 = {name: 'Rufat', age: 22, job: 'Frontend'}
   const person2 = {name: 'Jahongir', age: 20, job: 'Meneger'}

   bind(person1, logPerson)
   bind(person2, logPerson)
*/

function bind(context, fn) {
    return function(...args) {
        fn.apply(context, args)
    }
}

function logPerson() {
    console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
}

const person1 = {name: 'Rufat', age: 22, job: 'Front end'}
const person2 = {name: 'Jahongir', age: 20, job: 'Meneger' }

bind(person1, logPerson)()
bind(person2, logPerson)()