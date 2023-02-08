//basic template for express.js

const express = require("express");
const app = express();

app.get("/",(req,res)=>{
    res.send("hello World with fun")
});

app.get('/about',(req,res)=>{
    res.send("hello world from about")
})


app.listen(8000,()=>{
    console.log("listing the port at 8000")
})




//routing in express.js
const express = require("express");
const app = express();
const port=3000;

app.get("/",(req,res)=>{
    res.send("welcome to my home page")
})

app.get("/about",(req,res)=>{
    res.status(200).send("welcome to my about page")
})

app.get("/contact",(req,res)=>{
    res.status(200).send("welcome to my contact page")
})



app.listen(port,()=>{
    console.log(`listinig to the port no ${port}`)
})


//serving api response and serving html and json
app.get("/temp",(req,res)=>{
   res.send([{
    id: 1,
    name: "vinod"
   },
   {
    id: 1,
    name: "vinod"
   },
   {
    id: 1,
    name: "vinod"
   }]);
})



