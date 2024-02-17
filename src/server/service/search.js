
//Awaiting connecting with model and const update
//Below an example
 const { Recipes } = require("../models/recipes");

const getSearchedTitles = async (query = "") => {
  try {
    const allTitles = await Recipes.find();

    const result = allTitles.filter((obj) =>
      obj.title.toLowerCase().includes(query.toLowerCase())
    );

    if (result.length === 0) {
      return null;
    }

    return result;
  } catch (error) {
    console.error(error);
    return;
  }
};

module.exports = {
  getSearchedTitles,
};