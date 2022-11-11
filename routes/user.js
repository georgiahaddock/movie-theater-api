const { Router } = require('express');
const userRouter = Router();
const { User } = require("../models");

userRouter.get("/", async (req, res) => {
    const allUsers = await User.findAll();
    res.status(200).send(allUsers);
})

userRouter.get("/:username", async (req, res) => {
    const user = await User.findOne({username: req.params.username});
    res.status(200).send(user);
})

module.exports = userRouter;
