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
    const updatedShow = await show.update({rating: req.body.rating});
    res.send({updatedShow});
})

//The Show Router should update the status on a specific
// show from “canceled” to “on-going” or vice versa using an endpoint.
showRouter.put("/:id/updates", async (req, res) => {
    const show = await Show.findByPk(req.params.id);
    const updatedShow = await show.update({status: req.body.status});
    res.send({updatedShow});
})

// The Show Router should be able to delete a show.
showRouter.delete("/:id/delete", async (req, res) => {
    const show = await Show.findByPk(req.params.id);
    const deletedShow = await show.destroy();
    res.send({deletedShow});
})

module.exports = showRouter;
