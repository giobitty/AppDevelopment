console.log("Welcome to NodeJS by Giorgia Beavers")
console.warn("WARNING! The file might be corrupted")
console.error("ERROR! Syntax Error Check Spelling")
console.trace("Trace error in line")
console.log("----Example 2: global object, timer -------")
setTimeout(()=>{console.warn('Time is over')},1000)
// time interval
let count = 3
const timer = setInterval(()=>{
    console.log(`Counting ${count}`)
    count -= 1
    if (count=== -1){
        clearInterval(timer)
    }
}, 2000)

console.log("----Example 3: check or print file -------")
console.log(`Current directory ${__dirname}`)
console.log(`Current file ${__filename}`)
console.log("----Example 4: working with different modules -------")
// import the module
const name = require('./mod')
// console.log(name)
// console.log(name()) 
console.log(name.helper('Peter'))
console.log(name.id('347'))
console.log(name.email('p@mail.edu'))

console.log("----Example 5: nodejs event module -------")
// import the nodejs module events
const events = require('events')
// use constructor 'new' to create an object of events
const eventEmitter = new events.EventEmitter()
eventEmitter.on('test',function(e){
    console.log(e)
})
eventEmitter.emit('test', 'EVENT EMITTERS IN NODEJS')
console.log("------ Example 6: read file in nodejs -------")
const fs = require('fs')
fs.readFile('readmore.txt', 'utf-8', function(error,data){
    console.log(data)
    console.log(`Error = ${error}`)

})
