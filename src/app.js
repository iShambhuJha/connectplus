const express = require("express");
const { auth } = require("./middlewares/auth")

const app = express();

app.get('/user', (req, res) =>{
    throw new Error("error")
    res.send("hi")
    // try{
    //     throw new Error("error")
    //     res.send("hi")
    // }catch(err) {
    //     res.status(500).send("Internal server error");
    // }
})

app.use('/', (err, req, res, next) => {

    console.log('this block')
    if(err) {
        res.status(500).send("Internal server error 111");
    }
})

app.listen(4000, ()=>{
    console.log("app is listening on port 4000")
})
