// import mongoose
const mongoose = require('mongoose');

// connect to MongoDB
mongoose.connect("mongodb://localhost/students_list")

// check if it is connected
mongoose.connection
    // use .once to check the first connection to mongodb by triggering an event
    .once('open',function(){console.log('\n---- Connected to MongoDB ----\n')})
    // use .once method to check for errors in the connection
    .on('error', function(e){
        console.log('Error with the connection: ' , e)
    })
beforeEach(function(done) {
    mongoose.connection.collections.students.drop(function() {
        done();
    });
});
