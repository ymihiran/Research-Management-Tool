import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new Schema({

  
    name: {
        type: String,
        required: [true,"Please enter your name"]  
    },

    email: {
        type: String,
        required: [true,"Please enter your email"],
        trim:true
    },
    password: {
        type: String,
        required: [true,"Please enter a password"]
    },

    avatar: {
        type: String,
        default:"https://res.cloudinary.com/devatchannel/image/upload/v1602752402/avatar/avatar_cugq40.png"
    },

    mobile: {
        type: String,
        required: [true,"Please enter your mobile number"]
    },

    user_role: {
        type: String,
        default:"Student"
    },
    specialization: {
        type: String,
        default:""
    },
    research_area: {
        type: String,
        default:""
    },
    reg_number: {
        type: String,
        required: [true,"Please enter your registration number"]
    }

},{
    timestamps : true
})

const Users = mongoose.model("Users", userSchema);
export default Users;