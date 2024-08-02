// July 25, JS object create obj for student with properties of name age and school
let student1 = {name : 'Peter' , age: 23 ,school : 'NeverLand QCC'}
// retrieve info
console.log(student1['name'])
// retrieve info with dot
console.log(student1.school)
console.log(student1.age)
console.log(student1.name)

student1.age = 30
student1["school"] = "NYU"
console.log(`Update age ${student1.age}`)
console.log(`Update school ${student1.school}`)
// EXE 2 NESTED OBJECT AND ARRAY WITHIN an OBJECT
console.log("----- EXE 2 -----")
let user1 = {
    name: "martha",
    age:30,
    // as property
    friends:["Kathy", "Carl", "Peter"],
    // an object as property
    favorite:{
        food:"cake",
        color:"green"
    }

}
let favorite_food = user1.favorite.food
console.log(`${user1.name} favorite food is ${favorite_food}`)

let second_friend = user1.friends[1]
console.log(`${user1.name} second friend is ${second_friend}`)

// EXE 3
let schedule =[
    {
        day:"Monday",
        plan:"Yoga class",
        time: "6:30pm"
    },
    {
        day:"Tuesday",
        plan:"Software dev class",
        time: "5:30pm"
    }
]
// access tuesday
console.log(`The plan for Tuesday is ${schedule[1].plan}`)
// EXE 4
console.log("----- EXE 4 -----")
let item = {
    //properties
    id:112,
    name: 'pencil',
    quantity:200,
    color:['red', 'blue', 'black'],
    // methods
    sale : function(){
        return "SALE 50%!"
    },
    quantity_cart : function(e){
        this.quantity -= e
    }
}
console.log(`The sale message of ${item.name} is ${item.sale()}`)
console.log(`The remaining quantity of ${item.name} is ${item.quantity_cart(5)}`)
// JSON , JS Object Notation text format used to store data
// EXE 5
console.log("----- EXE 5 -------")
let fashionshow = {
    category:"fashion",
    mdels:[
        {
            name:"Marilena",
            age:33,
            city:"NYC"
        },
        {
            name:"Sonia",
            age:23,
            city:"Paris"
        }
    ]
}
console.log(fashionshow)

let json_fashionshow = JSON.stringify(fashionshow)
console.log("\nJSON version")
console.log(json_fashionshow)