// basic app demo
require('dotenv').config();
const express = require('express');
const app = express();
const port = 5000;


app.get('/', (req,res)=>{
    res.send('hiii, there !');
})

/* get temp..
 app.get(route, (req,res) => { CODE } )
*/

app.get ( '/contact', (req,res)=>{
    res.send("<h1> Contact Page </h1>")
})

app.get('/home', (req,res)=>{
    res.send("<h1>Home Page</h1>")
})

app.get('/about',(req,res)=>{
    res.send("<h1>About Page</h1>")
})


app.listen(process.env.PORT, ()=>{
    console.log(`Server started on ${port}`);
    
})