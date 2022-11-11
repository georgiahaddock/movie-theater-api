const { Router } = require('express');
const showRouter = Router();
const { Show, User } = require("../models");
const userRouter = require('./user');

//The Show Router should GET ALL shows from the database using the endpoint /shows.
showRouter.get("/", async (req, res) => {
    const allShows = await Show.findAll();
    res.status(200).send(allShows);
})

//The Show Router should GET one show from the database using an endpoint.
showRouter.get("/:id", async (req, res) => {
    const show = await Show.findByPk(req.params.id);
    res.status(200).send(show);
})

//The Show Router should get shows of a specific genre
//using an endpoint.
showRouter.get("/genres/:genre", async (req, res) => {
    const showsOfGivenGenre = await Show.findAll({where: {genre: req.params.genre}});
    res.status(200).send(showsOfGivenGenre);
})

//The Show Router should update a rating on a specific
//show using an endpoint.
showRouter.put("/:id/watched", async (req, res) => {
    const show = await Show.findByPk(req.params.id);
    console.log(req.body);
    const updatedShow = await show.update({rating: req.body.rating});
    res.send({updatedShow});
})

module.exports = showRouter;
