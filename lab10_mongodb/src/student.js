const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 

// Configure the schema
const StudentSchema = new Schema({
    name: String
});

// Schema for each student
const Student = mongoose.model('Student', StudentSchema);

// Export the schema
module.exports = Student;
