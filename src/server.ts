// const express = require('express');

// const app = express();

// app.use(express.json());



// app.listen(3333, () => console.log("Server up in 3333"));


import express from "express";
import { router } from "./routes";

const app = express();

app.use(express.json());
app.use(router);


app.get("/health", (req, res) => {
    return res.json("upsss");
});

app.listen(4003, () => console.log("Server is running on PORT 4003"));