const assert = require('assert');
const mongoose = require('mongoose');
const Student = require('../src/student');

describe('Read data', function() {
    let student1, student2

    // This will run before each test in this block
    beforeEach(function(done) {
        student1 = new Student({ name: 'Peter' });
        student2 = new Student({ name: 'Martha' });
        // Save the student to the database
        student1.save()
        student2.save()
        .then(function() {
            done();
        });
        console.log(student1)
        console.log(student2)
    });

    // Test to find all students by name
    it('Finds all students with the name "Martha"', async function() {
        const students = await Student.find({ name: 'Martha' });
        console.log(students)
        console.log(students._id)
    });
});
