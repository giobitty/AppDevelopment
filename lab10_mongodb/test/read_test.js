const assert = require('assert');
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const Student = require('../src/student'); // Adjust the path as needed

let mongoServer;
let connection;
let studentId; // Store the student ID for the read operation

before(async () => {
    mongoServer = await MongoMemoryServer.create();
    const mongoUri = mongoServer.getUri();
    connection = await mongoose.connect(mongoUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    // Create a student record to read
    const student = new Student({ name: 'Peter' });
    const savedStudent = await student.save();
    studentId = savedStudent._id; // Use this ID for the read test
});

after(async () => {
    await connection.disconnect();
    await mongoServer.stop();
});

describe('Read Operation', function() {
    it('should read a student by ID', async function() {
        // Perform the read operation
        const student = await Student.findById(studentId);

        // Verify the student record was read correctly
        assert.ok(student, 'Student was not found');
        assert.strictEqual(student.name, 'Peter', 'Student name is incorrect');
    });

    it('should return null for a non-existent student', async function() {
        // Perform the read operation for a non-existent ID
        const nonExistentStudentId = mongoose.Types.ObjectId(); // Generate a random ObjectId
        const student = await Student.findById(nonExistentStudentId);

        // Verify that the student record is not found
        assert.strictEqual(student, null, 'Found a student for a non-existent ID');
    });
});
