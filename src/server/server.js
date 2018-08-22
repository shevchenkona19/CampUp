const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({
    parameterLimit: 100000,
    limit: "50mb",
    extended: true,
}));

const views = require("./routes/views");
const parties = require("./routes/parties");
const users = require("./routes/users");
const laws = require("./routes/laws");
const news = require("./routes/news");

app.use("/build", express.static(path.join(__dirname, "../../build")));

app.use("/parties", parties);
app.use("/users", users);
app.use("/laws", laws);
app.use("/news", news);
app.use("/", views);

app.listen(port, () => console.log("App started at port: " + port));