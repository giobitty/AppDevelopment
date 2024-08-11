const assert = require('assert');
const mongoose = require('mongoose');
const Student = require('../src/student');

describe('Update data', function() {
    let student1;

    // This will run before each test in this block
    beforeEach(function(done) {
        student1 = new Student({ name: 'Peter' });
        // Save the student to the database
        student1.save().then(function() {
            done();
        });
    });

    // Test to update a student's name
    it('Updates the name of a student', async function() {
        // Find the student and update their name
        const result = await Student.findOneAndUpdate(
            { name: 'Peter' }, 
            { name: 'Paul' },
            { new: true }  // Return the updated document
        );

        // Fetch the updated student from the database
        const updatedStudent = await Student.findOne({ _id: student1._id });

        // Assert that the student's name was updated
        assert(updatedStudent.name === 'Paul', 'The student\'s name was not updated correctly');
        console.log(updatedStudent);
    });
});
