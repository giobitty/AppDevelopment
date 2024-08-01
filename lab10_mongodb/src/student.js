const mongoose= required("mongoose")
const Schema = mongose.Schema

//config the schema
const StudentSchema = new Schema({name:String})

//Schema for each student
const Student = mongoose.model('student', StudentSchema)

//export the schema
module.exports = Student
