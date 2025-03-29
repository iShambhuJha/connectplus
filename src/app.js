const express = require("express");

const app = express();



app.use("/user", (req, res) => {
    res.send("user details not found")
})

app.use("/employee", (req, res) => {
    res.send("employee details not found")
})

app.use("/", (req, res)=>{
    res.send("Welcome to Node js server")
})

app.listen(4000, ()=>{
    console.log("app is listening on port 4000")
})