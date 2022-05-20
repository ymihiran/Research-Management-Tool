const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SubmitTypeSchema = new Schema({

    Submission_Type_Name: {
        type: String,
        required: true
    },

    Description: {
        type: String,
        required:true
    } 
},{ timestamps: true })

const SubmitType = mongoose.model("SubmitType", SubmitTypeSchema);
module.exports = SubmitType;