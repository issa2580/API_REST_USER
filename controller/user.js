const User = require('../models/user')

const userCtrl = {
    register: async(req, res) => {
        const { name, email, password } = req.body;        
        const UserExit = await User.findOne({ email: email})
        if (UserExit) {
            res.status(400)
            res.json({ msg: 'User exist process exit'})
            return;
        }
        if (password.length < 6) {
            res.status(401)
            res.json({ msg: 'Password to under'})
            return;
        }
        const NewUser = new User({
            name: name,
            email: email,
            password: password
        })
        await NewUser.save();
        res.status(200)
        res.json(NewUser)
        console.log(NewUser);
    },
    login: async(req, res) => {
        try {
            const { email, password} = req.body;
            const UserExit = await User.findOne({ email: email})
            if (!UserExit) {
                res.status(400)
                res.json({ msg: "User does not exist process exit"})
                return;
            }
            if(!password) {
                res.status(400)
                res.json({ msg: "Password required process exit"})
                return;
            }
            // if (password !== UserExit.password) {
            //     res.status(400)
            //     res.json({ msg: "Password incorrect process exit"})
            //     return;
            // }
            res.status(200)
            res.json(UserExit)
            console.log(UserExit);
        } catch (error) {
            res.status(400)
            res.json(error)
        }
    },
    getAllUsers: async (req, res) => {
        const users = await User.find()
        try {
            res.status(200)
            res.json(users)
        } catch (error) {
            res.status(400)
            res.json(error)
        }
    },
    getUser: async(req, res) => {
        const { id } = req.params;
        const user = await User.findById(id)
        try {
            res.status(200)
            res.json(user)
        } catch (error) {
            res.status(400)
            res.json(error)
        }
    },
    updateUser: async(req, res) => {
        /* Found user */
        const user = await User.findById(req.params.id)
        if(user) {
            /* update user */
            const update = await User.findByIdAndUpdate(
                req.params.id,
                req.body, 
                {
                new: true,
                runValidators: true
                }
            )
            /* return user */
            res.status(200)
            res.json(update)
        }
        else {
            /* return error */
            res.status(400)
            res.json(error)
        }
    },
    deleteUser: async(req, res) => {
        const user = await User.findById(req.params.id)
        if(user) {
            const deleted = await User.findByIdAndDelete(
                req.params.id,
                req.body,
                {
                    new: true,
                    runValidators: true
                }
            )
            res.status(200)
            res.json(deleted)
        }
        else {
            res.status(400)
            res.json(error)
        }
    }

}


module.exports = userCtrl