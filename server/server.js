const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const User = require('./models/users.js');
const bodyParser = require('body-parser');



const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://myUser:user5246@161.246.127.24:9029/mydb?readPreference=primary&ssl=false',{ useNewUrlParser: true,useUnifiedTopology: true,authSource: 'mydb'})
.catch((err) => console.error('Error connecting to database:',err))
.then(() => console.log('Connected to database'))

app.post('/register', (req, res) => {
    console.log('Reagister by: ',req.body)
    User.create({
        username: req.body.username,
        password: req.body.password,
    }).then(() => {
        res.status(201).send('Registered Successfully')
    }).catch((err) => {
        console.error('Error registering user',err)
        res.status(500).send('Error registering user')
    })
});
app.post('/login', (req, res) => {
    console.log('Logging in by: ',req.body)
    User.findOne({
        username: req.body.username, 
        password: req.body.password,
    }).then ((user) => {
        if(user){
            res.status(200).send('Logged in successfully')
        }else{
            res.status(401).send('Invalid username or password')
        }
    }).catch((error) => {
        console.error('Error logging in:', error);
        res.status(500).send('Error logging in');
    })
});
app.get('/home/:username',(req,res) => {
    const {username} = req.params
    /*use username variable to query in database and response data in json form*/
    User.findOne({
        username: username,
    }).then((user) => {
        res.status(200).json(user)
    }).catch((err) => {
        res.status(204).send('Error Cannot find user: ' + err.message)
    })
})

app.listen(port,()=>{
    console.log("The server listening on port "+port);
});