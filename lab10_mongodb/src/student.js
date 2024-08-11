const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 

// Configure the schema
const StudentSchema = new Schema({name: String});

// Schema for each student
const Student = mongoose.model('student', StudentSchema);

// Export the schema
module.exports = Student;


// Insert many will add an array of objects
// findOne() ; find()