const express = require("express");
const { getSearchedTitlesHandler } = require("../../controllers/search");
const searchRouter = express.Router();

const { authMiddleware } = require("../../auth/auth.middleware");

searchRouter.get("/title", authMiddleware, getSearchedTitlesHandler);
// searchRouter.get("/ingredients", authMiddleware, getSearchedIngredientsHandler);

module.exports = { searchRouter };