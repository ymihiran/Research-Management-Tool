import CoSuperVisorReq from "../models/CoSupervisorReq.js";
import nodemailer from "nodemailer";
import hbs from "nodemailer-express-handlebars";
import path from "path";

//initialize nodemailer
var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "sliit.rmt@gmail.com",
    pass: "mvvarvjzcwfxwuft",
  },
});

const handleBar = {
  viewEngine: {
    partialsDir: path.resolve("./views/"),
    defaultLayout: false,
  },
  viewPath: path.resolve("./views/"),
};

transporter.use("compile", hbs(handleBar));

//add request to the db
export const sendReq = async (req, res) => {
  try {
    const { groupID, researchField, topic, email } = req.body;

    const newRequest = new CoSuperVisorReq({
      groupID,
      researchField,
      topic,
      email,
    });

    await newRequest.save().then(() => {
      res.json(newRequest);
    });
  } catch (err) {
    res.status(500).json(err);
  }

  var mailOptions = {
    from: "SLIIT Research Management",
    to: "sdulshan10@gmail.com",
    subject: "SLIIT Research Management",
    text: "hi",
    template: "email",
    context: {
      groupID: req.body.groupID, // replace {{name}} with Adebola
      rField: req.body.researchField, // replace {{company}} with My Company
      rTopic: req.body.topic,
    },
  };

  //send mail to co supervisor
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};
