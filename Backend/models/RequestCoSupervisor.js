const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RequestCoSupervisorSchema = new Schema(
  {
    requestId: {
      type: String,
      required: true,
    },
    coSupervisorId: {
      type: String,
      required: true,
    },
    coSupervisorName: {
      type: String,
      required: true,
    },
    Comments: {
      type: String,
    },
  },
  { timestamps: true }
);
const RequestCoSupervisor = mongoose.model(
  "RequestCoSupervisor",
  RequestCoSupervisorSchema
);
module.exports = RequestCoSupervisor;
