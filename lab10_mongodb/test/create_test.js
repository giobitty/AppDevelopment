//import assert. assert is used to compare two boolean
const assert = require("assert"
)
//import student schema
const Student = require('../src/student')

//describe function to push testing through Mocha
describe('Create the first data', function(){
    isTypedArray('Saved the student', function(){
        //create new student
        const student1 = new Student({name:'Peter'})
        //read and save
        student1.save()
    })
})
