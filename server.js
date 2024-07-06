const express = require("express");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose")
const Article = require('./models/article')
const methodoverride = require('method-override')
const app = express();      
const port = process.env.PORT || 5000;
app.use(methodoverride('_method'))

mongoose.connect('mongodb://localhost/blog')

app.use(express.urlencoded({extended:false}))
app.set('view engine', "ejs")
app.use(express.static("public"));
app.use("/", require("./routes/route1.js"))
// app.use(express.json())
app.get('/', (req,res)=>{
    const articles = [{title:"test"}]
    res.render("index",{articles:articles})
})
// app.post('/', (req,res)=>{
//     const articles = [{title:"test"}]
//     res.render("index",{articles:articles})
// })


app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})      