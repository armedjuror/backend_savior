const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app=express();
require('dotenv/config');


app.use(cors());
app.use(function (_, res, next) {
    res.setHeader("Content-Type", "application/json");
    next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const postsRoute = require('./routes/posts');
app.use('/',postsRoute);

mongoose.connect(
    process.env.DB_Connection,
    {
    useNewUrlParser:true,
    useUnifiedTopology:true
    },
    () => console.log('connected to DB!')
)

app.listen(3000);