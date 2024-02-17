
const express = require("express");
const cors = require("cors");

const app = express();

const { searchRouter } = require("./routes/api/search");

app.use("/api/search", searchRouter);

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));