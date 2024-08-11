const assert = require('assert');
const mongoose = require('mongoose');
const Student = require('../src/student');

describe('Delete data', function() {
    let student1;

    // This will run before each test in this block
    beforeEach(function(done) {
        student1 = new Student({ name: 'Peter' });
        // Save the student to the database
        student1.save().then(function() {
            done();
        });
    });

    // Test to delete a student
    it('Deletes a student by name', async function() {
        // Delete the student by name
        await Student.deleteOne({ name: 'Peter' });

        // Fetch the student from the database
        const deletedStudent = await Student.findOne({ name: 'Peter' });

        // Assert that the student was deleted
        assert(deletedStudent === null, 'The student was not deleted');
    });
});
