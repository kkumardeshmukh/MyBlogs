const userModel = require('../models/userModel')
const bcrypt = require('bcrypt')


// registering user
exports.registerController = async (req, res) => {
    try {
        const { name, email, phone, password } = req.body

        if (!name || !email || !phone || !password) {
            return res.status(500).send({
                message: 'fill all fields for registration',
                success: false
            })
        }

        const existingUser = await userModel.findOne({ email })

        if (existingUser) {
            return res.status(401).send({
                message: 'User already exists',
                success: false
            })
        }

        const hashedpassword = await bcrypt.hash(password, 10)
        console.log(hashedpassword)


        const user = await userModel({ name, email, phone, password: hashedpassword }).save()

        return res.status(401).send({
            message: 'User Registered Successfully',
            success: true,
            user
        })

    }
    catch (error) {
        console.log(error);
        return res.status(500).send({
            message: "Error In Register callback",
            success: false,
            error,
        });
    }
}




//login user
exports.loginController = async (req, res) => {

    try {

        const { email, password } = req.body
        if (!email || !password) {
            return res.status(400).send({
                success: false,
                message: "fill all field",
            })
        }

        const user = await userModel.findOne({ email })

        if (!user) {
            return res.status(400).send({
                success: false,
                message: "email not found in database so register first",
                email
            })
        }

        const passwordcheck = bcrypt.compare(password, user.password)
        if (!passwordcheck) {
            return res.status(400).send({
                success: false,
                message: "Entered invalid password",
                email
            })
        }

        return res.status(200).send({
            success: true,
            message: "user loged in successfully",
            user: {
                name: user.name,
                email: user.email,
                phone: user.phone
            }
        })


    } catch (error) {
        console.log(error);
        return res.status(501).send({
            message: "Error In Login callback",
            success: false,
            error,
        });
    }


}

//get all users 
exports.allUserController = async (req, res) => {

    try {

        const users = await userModel.find({})

        if (!users) {
            return res.status(200).send({
                message: "No one user register yet",
                success: false,
            });
        }

        return res.status(200).send({
            message: "All users fetched successfully",
            success: true,
            users
        });

    } catch (error) {
        console.log(error);
        return res.status(501).send({
            message: "Error In All user callback",
            success: false,
            error
        });
    }
}