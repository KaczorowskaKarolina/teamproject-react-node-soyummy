const { getSearchedTitles } = require("../..");

const getSearchedTitlesHandler = async (req, res, next) => {
  try {
    const { query } = req.body;
    const listOfSearches = await getSearchedTitles(query);

    if (listOfSearches === null) {
      return res.status(404).json({
        message:
          "Nie znaleźliśmy żadnych przepisów które pasują do twojego opisu",
      });
    }
    console.log(listOfSearches.length);
    return res.status(200).json({ listOfSearches });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Wystąpił błąd serwera." });
  }
};

module.exports = {
  getSearchedTitlesHandler,
};