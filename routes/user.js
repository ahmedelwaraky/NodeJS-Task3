const express = require("express");
const router = express.Router();
const userModel = require("../models/userModel");
//create user
router.post("/", (req, res) => {
  userModel.create(req.body ).then((newUser) => {
      res.status(201).json({newUser});
}).catch((err) => {
      res.status(500).json({err});
    });
});

//read or Find All User
router.get("/", (req, res) => {
  userModel.find().then((allUsers)=>{
      res.status(201).json({allUsers});
  }).catch((err)=>{
      res.status(500).json({err})
  })
});
16- // res.send(allUsers)  old response

//read or Find user
router.get("/:id", (req, res) => {
  const id = req.params.id;
  userModel.findById(id).then((user)=>{
    res.status(201).json(user)
  }).catch((err)=>{
    res.status(500).json({err})
  })
});

//Update User
router.put("/:id", (req, res) => {
  const id = req.params.id;
  userModel.findByIdAndUpdate(id, req.body, {new:true}).then((user)=>{
    res.status(201).json(user)
  }).catch((err)=>{
    res.status(500).json({err})
  })
});

//delete
router.delete("/:id", (req, res) => {
  const id = req.params.id;
  userModel.findByIdAndDelete(id).then((user)=>{
    res.status(201).json()
  }).catch((err)=>{
    res.status(500).json({err})
  })
});

module.exports = router;
