//imports
const assert = require('assert')
const Student = require('../src/student')
const { describe, beforeEach } = require('mocha')

describe('Read the data', function(){
    let student1

    beforeEach(function(done){
        student1 = new Student({name:'Peter'})
        student1.save()
        .then(function(){done()})
    })
    it('Find all student with name Peter',function(){
        
    })
})