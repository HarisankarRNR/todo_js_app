const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://harisankarrnr:Harisankar2003@cluster0.wdhtwmt.mongodb.net/todos");
const todoSchema = mongoose.Schema({
    title: String, 
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);
module.exports = {
    todo: todo
}