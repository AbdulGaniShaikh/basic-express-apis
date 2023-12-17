import express from "express";
import bodyParser from 'body-parser';
import userRouter from './routes/user.js';

const app = express();
const PORT = 8080;

app.use(bodyParser.json());

app.use('/users',userRouter)
app.get('',(req, res) => {
    res.send('Welcome to the server!')
});

app.listen(PORT,  ()=>{
    console.log('Server is listening on port '+PORT);
})