const assert = require('assert');
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const Student = require('../src/student'); // Adjust the path as needed

let mongoServer;
let connection;
let studentId;

before(async () => {
    mongoServer = await MongoMemoryServer.create();
    const mongoUri = mongoServer.getUri();
    connection = await mongoose.connect(mongoUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
});

after(async () => {
    await connection.disconnect();
    await mongoServer.stop();
});

describe('Create Operation', function() {
    it('should create and save a new student', async function() {
        const student = new Student({ name: 'Peter' });
        const savedStudent = await student.save();
        
        studentId = savedStudent._id; // Store the student ID for later use in delete test

        assert.ok(savedStudent._id, 'Student does not have an ID');
        assert.strictEqual(savedStudent.name, 'Peter', 'Student name is incorrect');
    });
});
