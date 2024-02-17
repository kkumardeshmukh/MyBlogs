const express = require('express')
const { createBlogController, updateBlogController, deleteBlogController, getAllBlogController, singleBlogController } = require('../controller/blogcontroller')

const router = express.Router()


//create a new blog 
router.post('/create-blog', createBlogController)

//update a blog
router.put('/update-blog/:id', updateBlogController)

//delete a blog 
router.delete('/delete-blog/:id', deleteBlogController)

//get all blogs 
router.get('/all-blogs', getAllBlogController)

//get single blogs 
router.get('/single-blog/:id', singleBlogController)

module.exports = router;