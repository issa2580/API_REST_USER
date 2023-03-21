import User from "../models/UserModel";
import jwt from 'jsonwebtoken'

const UserController = {
    register: async(req, res) => {
        const { name, email, password } = req.body;
        
        const UserExit = await User.findOne({ email: email});
        if (UserExit) {
            return
            res.status(400)
            res.json({ msg: 'User does not exit'})
        }
        if(password.length < 6) {
            return
            res.status(401)
            res.json({ msg: 'Password to under'})
        }

        const NewUser = User.create({
            name: name,
            email: email,
            password: password
        })
        res.status(200)
        res.json(NewUser)

        console.log(NewUser);

        const token = gen
    }

}


module.exports = UserController;