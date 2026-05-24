const Message = require("./models/Message");
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");

const Project = require("./models/Project");

const app = express();
app.use(cors());

app.use(express.json());

mongoose.connect("mongodb+srv://admin:admin1@cluster0.xany2r9.mongodb.net/?appName=Cluster0")
.then(() => console.log("DB Connected"));

app.post("/add-project", async(req,res)=>{

    const newProject = new Project(req.body);

    await newProject.save();

    res.send("Project Added");

});

app.post("/contact", async (req, res) => {

    const newMessage = new Message(req.body);

    await newMessage.save();

    res.send("Message Saved");

});

app.get("/projects", async(req,res)=>{

    const data = await Project.find();

    res.json(data);

});

app.listen(5000, ()=>{
    console.log("Server Started");
});