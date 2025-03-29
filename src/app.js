const express = require("express");

const app = express();



// app.use("/user", (req, res) => {
//     res.send("user details not found")
// })

// app.use("/employee", (req, res) => {
//     res.send("employee details not found")
// })

// app.use("/", (req, res)=>{
//     res.send("Welcome to Node js server")
// })

app.get("/user", (req, res) =>{
    res.send("Get all users...")
})

app.post("/user", (req, res) =>{
    res.send("post all users...")
})

app.delete("/user", (req, res) =>{
    res.send("delete all users...")
})

app.use("/user", (req, res) =>{
    res.send("all users...")
})

app.listen(4000, ()=>{
    console.log("app is listening on port 4000")
})