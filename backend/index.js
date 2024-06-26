const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const app = express();
app.use(express.json());

app.post("/todo", async function(req, res){
    const createPayload = req.body;
    const parsedlayLoad = createTodo.safeParse(createPayload);
    if(!parsedlayLoad.success){
        res.status(411).json({
            msg: "You sent the wrong inputs",
        })
        return;
    }
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })

    res.json({
        msg: "todo created"
    })
})

app.get("/todos", async function(req, res){
    const todos = await todo.find({})
    res.json({
        todos
    })
})

app.put("/completed", async function(req, res){
    const updatePayload = req.body;
    const parsedlayLoad = updateTodo.safeParse(updatePayload);
    if(!parsedlayLoad.success){
        res.status(411).json({
            msg: "You sent the wrong inputs",
        })
        return;
    }
    await todo.updateOne({
        _id: req.body.id
    },{
        completed: true
    })
    res.json({
        msg: "todo is marked as completed"
    })
})

app.listen(3000);
console.log("The server is running in the port 3000");