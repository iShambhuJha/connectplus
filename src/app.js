const express = require("express");
const { auth } = require("./middlewares/auth")

const app = express();

app.use('/admin', auth);

app.get('/admin/getData', (req, res, next) => {
    res.send("get all user data")
})

app.get('/admin/postData', (req, res, next) => {
    res.send("post all user data")
})

app.listen(4000, ()=>{
    console.log("app is listening on port 4000")
})
