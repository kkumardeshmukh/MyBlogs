const express = require('express')
const { createBlogController, updateBlogController, deleteBlogController, getAllBlogController, singleBlogController, userBlogController } = require('../controller/blogcontroller')

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

//get blogs of single user which is given in params 
router.get('/user-blog/:id', userBlogController)

module.exports = router;