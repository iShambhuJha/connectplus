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

// app.get("/user", (req, res) =>{
//     res.send("Get all users...")
// })

// app.post("/user", (req, res) =>{
//     res.send("post all users...")
// })

// app.delete("/user", (req, res) =>{
//     res.send("delete all users...")
// })

// app.use("/user", (req, res) =>{
//     res.send("all users...")
// })

// app.get('/user/:userId/:name', (req, res)=>{
//     res.send(req.params)
// })

// app.get('/user', (req, res)=>{
//     res.send(req.query)
// })

app.get("/user", (req, res, next)=>{
    next()

    // res.send("response one")
},
[(req, res, next)=>{
    // res.send("response two")
    next()
},
(req, res, next)=>{
    res.send("response three")
}])

app.listen(4000, ()=>{
    console.log("app is listening on port 4000")
})