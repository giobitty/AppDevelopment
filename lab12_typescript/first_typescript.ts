// EXE1 explicit type
console.log("------ Example 1 : explicit type-----")

function greeter(username:string){
    console.log(`Welcome to Typescript ${username}`)
}
let user = "Giorgia"
greeter(user)
// EXE 2 implicit type
let y:12
console.log(y)

// explicit array (list)
let colors:string[]= ['red', 'white', 'blue']
console.log(colors)
//implicit array
let numbers = [3,9,-1]
console.log(numbers)

console.log("------ Example 32 : any type-----")
let a:any 
a=5
console.log('a=5',typeof(a))
a='Peter Pan'
console.log('a=Peter Pan',typeof(a))
a = false
console.log('a=false', typeof(a))
// ---- EXE 3
console.log("------ Example 3 : implicit type-----")
//unknown similar to 'any'
let b:unknown
b = 10
console.log("b = 10" ,typeof(b))
b = "Martha"
console.log("b = Martha", typeof(b))
b = true
console.log("b = true", typeof(b))
// EXE 4
console.log("------ Example 4 : enum type -----")
enum Countries {USA, Canada, Mexico}
let USA = Countries.USA
let Canada = Countries.Canada
let Mexico = Countries.Mexico

console.log(`Class object of Canada ${Canada}`)
console.log(`Class object of Mexico ${Mexico}`)
console.log(`Class object of USA ${USA}`)
// EXE 5
console.log("------ Example 5 : data type classes -----")
// can use the property link, if data type is explicit ( :string)
let username:string = "Ann Smith"
let character_username = username.length
console.log(`Username ${username} has ${character_username} characters`)
// if the data is implicit 
let firstname = 'Mario'
let character_firstname = firstname.length
console.log(`User first name ${firstname} has ${character_firstname} characters`)

console.log("------ Example 6 : return type function -----")
function get_time():number{
    return new Date().getHours()
}
console.log(`The time is ${get_time()}h `)
console.log("------ Example 7 : void functions -----")
function greeting():void{
    console.log('Welcome to Angular data type!')
}
// call the function
greeting()
console.log("------ Exemple 8 : functions w/ parameters -----")
function  get_sum(num1:number,num2:number, name:string){
    let result:string = name + ", the sum is "+ (num1+num2)
    return result
}
console.log(get_sum(2,3,"Peter"))

console.log("------ Example 9 : optional parameters -----");
function sum_total(n1: number, n2?: number): number {
    if (n2 !== undefined) {
        return n1 + n2;
    } else {
        return 0;
    }
}
console.log(`The sum is ${sum_total(5, 9)}`);
console.log(`The sum is ${sum_total(5)}`);

console.log(`The sum is ${sum_total(5,9)}`)
// console.log(`The sum is ${sum_total(5)}`)
console.log("------ Example 10 : spread syntax -----");
function get_average(...n: number[]): number {
    let total = 0;
    let count = n.length;

    for (let i = 0; i < count; i++) {
        total += n[i];
    }

    return count === 0 ? 0 : total / count;
}
console.log(`The average is ${get_average(10, 6, 2)}`);
// EXE 11 CLASS AND METHODS
console.log("------ Example 11 : Class -----");
class Car{
    // define data
    brand:string
    model:string
    year_manufacture: number

    // constructor
    constructor(brand:string, model:string, year_manufacture:number){
        this.brand = brand
        this.model = model
        this.year_manufacture = year_manufacture
    }
    year(){
        console.log(`The car was manufactured in ${this.year_manufacture}`)
    }
}

// create a modal for class car
let usercar = new Car('Fiat', 'Panda', 1998)
console.log(`Car brand = ${usercar.brand}`)
usercar.year()
// EXE 12 Inherited CLASS 
class Person{
    save(){
        console.log("Registration Successful")
    }
}
class Customer extends Person{
    sale(){
        console.log("x item was sold")
    }
}
class Employee extends Customer{
    salary(){
        console.log('Salary paid')
    }
}
let person1 = new Person
console.log('Calling method save from persone')
person1.save()

console.log('\nCalling method sale from customer')
let customer1 = new Customer
customer1.sale()

console.log('\nCalling method save from person')

let employee1 = new Employee
employee1.save()