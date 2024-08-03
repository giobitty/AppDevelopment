const assert = require('assert');
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const Student = require('../src/student'); // Adjust the path as needed

let mongoServer;
let connection;
let studentId; // Store the student ID for the delete operation

before(async () => {
    mongoServer = await MongoMemoryServer.create();
    const mongoUri = mongoServer.getUri();
    connection = await mongoose.connect(mongoUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    // Create a student to be deleted
    const student = new Student({ name: 'Peter' });
    const savedStudent = await student.save();
    studentId = savedStudent._id; // Use this ID for the delete test
});

after(async () => {
    await connection.disconnect();
    await mongoServer.stop();
});

describe('Delete Operation', function() {
    it('should delete the student', async function() {
        // Verify the student exists before deletion
        const student = await Student.findById(studentId);
        assert.ok(student, 'Student was not found before deletion');

        // Perform the delete operation
        await Student.deleteOne({ _id: studentId });

        // Verify the student has been deleted
        const deletedStudent = await Student.findById(studentId);
        assert.strictEqual(deletedStudent, null, 'Student was not deleted');
    });
});
