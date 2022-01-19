import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import postRoutes from './routes/posts.js';
const app = express();

app.use(bodyParser.json({limit : "30mb", extended : true}));
app.use(cors());
app.use(bodyParser.urlencoded({limit :"30mb", extended : true}));


//Routes Setup
app.use('/posts', postRoutes);


const CONNECTION_URL = 'mongodb+srv://kunals131:kunals131@cluster0.o0tf1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
//heroku will automatically populate env.PORT
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {
    useNewUrlParser : true, 
    useUnifiedTopology : true,
})
.then(()=>app.listen(PORT, ()=>console.log(`SERVER RUNNING ON PORT http://localhost:${PORT}`)))
.catch(ERR=>{
    console.log(ERR.message);
})

