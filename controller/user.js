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
    }

}


module.exports = userCtrl