// this is one of the modules, almost as in react we will crate a variable function and we export it
const helper = function(data){
    return `${data} is logged in.`
}
const id = function(i){
    return i
}
const email = function(e){
    return `${e}`
}

// module.exports = helper
// module.exports.helper = helper
// module.exports.id = id
// module.exports.email = email

module.exports = {helper,id,email}
