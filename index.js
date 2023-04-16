import express from "express";
import mongoose from 'mongoose';
// const Registration = require('./db/models/registration');
import { Registration } from './db/models/registration.mjs';
const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/snapp',{
    useNewUrlParser: true,
})
.then(() => console.log('Connected!'));

mongoose.connection.once('open',function(){
    console.log('Database connected Successfully');
}).on('error',function(err){
    console.log('Error', err);
})

app.post('/register', (req, res) => {
    const reg = new Registration(req.body).save().then(()=>{
        res.status(200).send({data:req.body, 'status':'success'});
    }).catch(()=>{
        
    });
   
});
app.listen(port, () => {
    console.log(`Server is running on port 5000.`);
});