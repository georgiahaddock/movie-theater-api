const { Router } = require('express');
const userRouter = Router();
const { User, Show } = require("../models");

//GET all users
userRouter.get("/", async (req, res) => {
    const allUsers = await User.findAll();
    res.status(200).send(allUsers);
})

//GET one user
userRouter.get("/:id", async (req, res) => {
    const user = await User.findOne({id: req.params.id});
    res.status(200).send(user);
})

// GET all shows watched by a user (user id in req.params)
userRouter.get("/:id/shows", async (req, res) => {
    const user = await User.findOne({id: req.params.id});
    res.status(200).send(user.getShows());
})

//PUT update and add a show if a user has watched it
userRouter.put("/:id/shows/:showId", async (req, res) => {
    const user = await User.findByPk(req.params.id);
    const show = await Show.findByPk(req.params.showId);
    const updatedUser = await user.addShow(show);
    res.send({updatedUser});
})

module.exports = userRouter;
