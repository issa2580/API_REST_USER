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
            name,
            email,
            password
        })
        await NewUser.save();
        res.status(200)
        res.json(NewUser)

        console.log(NewUser);

    }

}


module.exports = userCtrl