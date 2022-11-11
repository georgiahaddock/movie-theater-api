const express = require('express');
const app = express();
const port = 3000;
const userRouter = require("../routes/user");
const showRouter = require("../routes/show");

app.use(express.json());
app.use("/users", userRouter);
app.use("/shows", showRouter);

app.listen(port, () => {
    console.log("Listening on port " + port);
})

module.exports = app;
