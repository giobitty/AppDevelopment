const assert = require('assert');
const mongoose = require('mocha');
const Student = require('../src/student')

describe('Create the first data', function(){
    it('Student saved', function(){
        const student1 = new Student({name:'Peter'})
        // read and save student in db
        student1.save()
        // async function that checks if the student exists
        .then(()=>{
            assert(!student1.isNew)
        })
    })
})