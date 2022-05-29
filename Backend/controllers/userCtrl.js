import Users from '../models/userModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


const {CLIENT_URL} = process.env

const userCtrl={

    register: async (req, res) => {
        const {name, email, password,mobile,user_role,
            research_area,reg_number
     
     } = req.body
        try {
            
            
            if(!name || !email || !password || !mobile || !user_role || !reg_number)
            return res.status(400).json({msg: "Please fill in all fields."})

            if(!validateEmail(email))
            return res.status(400).json({msg: "Invalid email."})

            const user = await Users.findOne({email})
            if(user) return res.status(400).json({msg: "This email is already exists."})

            if(password.length < 8)
                return res.status(400).json({msg: "Password must be at least 8 characters."})
            
        //Encrypt the password
            const passwordHash = await bcrypt.hash(password, 12)

            const newUser = new Users({name, email,password:passwordHash,mobile,user_role,
                research_area,reg_number})

            const token = jwt.sign({reg: newUser.email, id: newUser._id}, process.env.REFRESH_TOKEN_SECRET, {expiresIn:"1h"} )

            await newUser.save();

            res.json({result: newUser, token,msg:"Registration Successfull.Please login to continue!"})

        }catch (err){

            return res.status(500).json({msg:err.message})
        }
    } ,
    
    login: async (req, res) => {
        try {
            const {email, password} = req.body
            const user = await Users.findOne({email})
            if(!user) return res.status(400).json({msg: "This email does not exist."})

            const isMatch = await bcrypt.compare(password, user.password)
            if(!isMatch) return res.status(400).json({msg: "Password is incorrect."})

            const token = jwt.sign({reg: user.email, id: user._id}, process.env.REFRESH_TOKEN_SECRET, {expiresIn:"1h"} )

            res.status(200).json({result: user, token,msg: "Login success!"})

        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },

    getAccessToken: (req, res) => {
        try {
            const rf_token = req.cookies.refreshtoken
            if(!rf_token) return res.status(400).json({msg: "Please login now!"})

            jwt.verify(rf_token, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
                if(err) return res.status(400).json({msg: "Please login now!"})

                const access_token = createAccessToken({id: user._id})
                res.json({access_token})
            })
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },

    resetPassword: async (req, res) => {
        try {
            const {password} = req.body
            
            const passwordHash = await bcrypt.hash(password, 12)

            await Users.findOneAndUpdate({_id: req.user.id}, {
                password: passwordHash
            })

            res.json({msg: "Password successfully changed!"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },

    getUserInfor: async (req, res) => {
        try {
            const user = await Users.findById(req.user.id).select('-password')

            res.json(user)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },

    updateUser: async (req, res) => {
        try {
            const {name, avatar} = req.body
            await Users.findOneAndUpdate({_id: req.user.id}, {
                name, avatar
            })

            res.json({msg: "Update Success!"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },

    logout: async (req, res) => {
        try {
            res.clearCookie('refreshtoken', {path: '/user/refresh_token'})
            return res.json({msg: "Logged out."})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },

}

//Email address type validation
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

const createActivationToken = (payload) => {
    return jwt.sign(payload, process.env.ACTIVATION_TOKEN_SECRET, {expiresIn: '5m'})
}

const createAccessToken = (payload) => {
    return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '15m'})
}

const createRefreshToken = (payload) => {
    return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {expiresIn: '7d'})
}

export default userCtrl;