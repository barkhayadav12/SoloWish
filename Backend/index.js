const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");


const UserModel = require("./models/User");
const NoteModel=require('./models/Note');
mongoose.connect('mongodb+srv://barkhayadav179:barkhayadav@solowhisper.bbrvc9k.mongodb.net/SoloWhisper?retryWrites=true&w=majority')


const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(cors());


app.get('/',(req,res)=>{
  res.send('<h1>SoloWhisper</h1>')
});

app.get('/', (req, res) => {
  return res.json({email: req.email, username: req.username})
})

app.post("/register", (req, res) => {
  const { username, email, password } = req.body;
  bcrypt
    .hash(password, 10)
    .then((hash) => {
      UserModel.create({ username, email, password: hash })
        .then((user) => res.json(user))
        .catch((err) => res.json(err));
    })
    .catch((err) => console.log(err));
    console.log(req.body);
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  UserModel.findOne({ email: email }).then(user=> {
    if (user) {
      bcrypt.compare(password, user.password, (err, response) => {
        if (response) {
          const token = jwt.sign(
            { email: user.email, username: user.username },
            "jwt-secret-key",
            { expiresIn: "1d" }
          );
          res.cookie("token", token);
          res.json("Successfully logged in!")
        } else {
          res.json("Password is incorrect.");
        }
      });
    } else {
     res.json("User does not exist");
    }
  })
  console.log(req.body);
});

app.post('/writenote',(req,res)=>{
  NoteModel.create({title:req.body.title, description: req.body.description})
  .then(result=>res.json('Success'))
  .catch(err=>res.json(err))
})

app.get('/note',(req,res)=>{
   NoteModel.find()
   .then(result=>res.json(result))
   .catch(err=>console.log(err))
})

app.get('/readnote/:id',(req,res)=>{
  const id=req.params.id;
  NoteModel.findById({_id:id})
  .then(result=>res.json(result))
  .catch(err=>res.json(err))
})

app.put("/editPost/:id", (req, res) => {
  const id = req.params.id;
  NoteModel.findByIdAndUpdate(
    { _id: id },
    { description: req.body.description},)
    .then((result) => res.json('Success'))
    .catch((err) => console.log(err));
});

app.delete('/deletenote/:id',(req,res)=>{
  const id=req.params.id;
  NoteModel.findByIdAndDelete({_id:id})
  .then(result=>res.json('Success'))
  .catch(err=>res.json(err));
})



app.listen(3002, () => {
  console.log("server is running");
});
