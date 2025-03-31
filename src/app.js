const express = require("express");
const { auth } = require("./middlewares/auth");
const connectDb = require("./config/database");
const User = require("./models/user");

const app = express();

app.use(express.json());

app.post('/signup', async (req, res) => {
    const user = new User(req.body);

    try{
        await user.save();
        res.send("User data saved successfully");
    }
    catch(err){
        res.status(500).send("Something went wrong")
    }
})

app.get('/user', async (req, res) =>{

    const user = await User.findOne({firstName: req.body.firstName});

    if(user){
        res.send(user);
    } else{
        res.status(400).send("User not found");
    }
});

app.get("/feed", async (req, res) => {

    const users = await User.find({});
    if(users){
        res.send(users)
    } else{
        res.status(400).send("User not found");
    }
})

app.delete('/user', async(req, res) => {
    await User.findByIdAndDelete(req.body.userId);

    res.send("User deleted successfully")
});

app.patch('/user', async(req, res) => {
    // await User.findByIdAndUpdate(req.body.userId, req.body);

    await User.findOneAndUpdate({firstName: req.body.firstName}, req.body);

    res.send("user updated successfully")
})

connectDb().then(()=>{
    console.log("DB connection established")
    app.listen(4000, ()=>{
        console.log("app is listening on port 4000")
    })
}).catch((err)=>{
    console.log("DB connection failed!!!")
})



