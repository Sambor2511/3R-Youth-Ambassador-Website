const express = require("express")
const Article = require('./../models/article')
const router = express.Router()
// const {getContacts,createContact,getContact,updateContact,deleteContact} = require("../controllers/contactController.js")

// router.route("/").get(getContacts).post(createContact);
// router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);
router.get('/new', async (req,res)=>{
    const article = await Article.find()
    res.render('new', {article:article})
})
router.get('/new/newform/', (req,res)=>{
    res.render('newform', {article: new Article()})
})
router.get('/new/newform/:id', async (req,res)=>{
    const article = await Article.findById(req.params.id)
    if (article == null) res.redirect('/')
    res.render('show', {article:article})
})
router.post('/new/newform/', async (req,res)=>{
    let article = new Article({
        title:req.body.title,
        description:req.body.description,
        markdown:req.body.markdown
    })
    try{
        article = await article.save()
        res.redirect(`/new/newform/${article.id}`)
    } catch (e) {
        console.log(e)
        res.render('new', {article:article})
    }
})
router.delete('/:id', async (req, res) => {
    await Article.findByIdAndDelete(req.params.id)
    res.redirect('/')
  })
module.exports = router;