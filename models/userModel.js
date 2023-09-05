const mongoose = require("mongoose");
//create new schema must require mongoose
const userSchema = new mongoose.Schema({
  FirstName: {
    type: String,
    minLength: 3,
  },
  LastName: {
    type: String,
    minLength: 3,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

//create collection at data base (called + USer's)
module.exports = mongoose.model("User", userSchema);
