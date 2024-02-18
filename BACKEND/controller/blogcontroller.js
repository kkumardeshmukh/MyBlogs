const mongoose = require('mongoose')
const blogModel = require('../models/blogmodel')
const userModel = require('../models/userModel')

exports.createBlogController = async (req, res) => {
    try {

        const { title, description, catagory, image, user } = req.body

        if (!title || !description || !catagory || !image || !user) {
            return res.status(400).send({
                success: false,
                message: " fill all the fields"
            })
        }

        const existingUser = await userModel.findById(user)

        console.log(existingUser)

        if (!existingUser) {
            return res.status(404).send({
                success: false,
                message: " enable to find user"
            })
        }



        // const blogtitle = await blogModel.findOne({ title })
        // if (blogtitle) {
        //     return res.status(400).send({
        //         success: false,
        //         message: "cahnge your title it is already in database"
        //     })
        // }


        const newBlog = new blogModel({ title, description, catagory, image, user });
        await newBlog.save();

        //at the same time of creating the new blog this will update blogs array of user schema
        existingUser.blogs.push(newBlog)
        await existingUser.save()



        return res.status(201).send({
            success: true,
            message: " blog created successfully",
            newBlog
        })

    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success: false,
            message: "error while creating blog in server",
            error
        })

    }
}


exports.updateBlogController = async (req, res) => {

    try {

        const { id } = req.params
        const { title, description, catagory, image } = req.body

        const blog = await blogModel.findByIdAndUpdate(id, { ...req.body }, { new: true })

        return res.status(201).send({
            success: true,
            message: " blog updated successfully",
            blog
        })
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success: false,
            message: "error while upadting blog",
            error
        })

    }
}


exports.deleteBlogController = async (req, res) => {
    try {
        const blog = await blogModel.findOneAndDelete(req.param.id)
        // accessing blog by id in params without destructuring
        if (!blog) {
            return res.status(404).send({
                success: false,
                message: " blog not founded",
            })

        }
        return res.status(201).send({
            success: true,
            message: " blog deleted successfully",
        })
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success: false,
            message: "error while deleting blogs in server",
            error
        })

    }
}


exports.getAllBlogController = async (req, res) => {

    try {

        const blogs = await blogModel.find({})
        if (!blogs) {
            return res.status(200).send({
                success: false,
                message: "blogs are not created yet so not found"
            })
        }

        return res.status(201).send({
            success: true,
            BlogCount: blogs.length,
            message: "All blogs are as follows",
            blogs
        })
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success: false,
            message: "error while accessing blogs in server",
            error
        })

    }

}


exports.singleBlogController = async (req, res) => {

    try {

        const { id } = req.params

        const blog = await blogModel.findById(id)
        if (!blog) {
            return res.status(400).send({
                success: false,
                message: "blog not fing by id ",
                error
            })
        }
        return res.status(201).send({
            success: true,
            message: "found blog with given id",
            blog
        })

    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success: false,
            message: "error while accessing blogs in server",
            error
        })

    }
}

exports.userBlogController = async (req, res) => {

    try {
        const userBlog = await userModel.findById(req.params.id).populate("blogs")

        if (!userBlog) {
            return res.status(404).send({
                success: false,
                message: "blogs not found "
            })
        }
        return res.status(200).send({
            success: true,
            message: "blogs found ",
            userName: userBlog.name,
            userBlog: userBlog.blogs
        })


    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success: false,
            message: "error while accessing blogs of perticular user in server",
            error
        })

    }


}