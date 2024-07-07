const express = require("express");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose")
const Article = require('./models/article')
const methodoverride = require('method-override')
const app = express();      
const port = process.env.PORT || 5000;
app.use(methodoverride('_method'))

mongoose.connect('mongodb+srv://samborsok12345:testing123@cluster0.u5fgd9b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')

app.use(express.urlencoded({extended:false}))
app.set('view engine', "ejs")
app.use(express.static(__dirname+"/public"));
app.use("/", require("./routes/route1.js"))
// app.use(express.json())
app.get('/', (req,res)=>{
    const articles = [{title:"test"}]
    res.render("index")
})
app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})  