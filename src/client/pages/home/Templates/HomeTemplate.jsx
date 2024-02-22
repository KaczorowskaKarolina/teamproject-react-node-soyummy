const { HomeOrganism } = require('../Organisms/HomeOrganism');

const HomeTemplate = (categories, recipesByCategory) => {
  return (
    <HomeOrganism
      categories={categories}
      recipesByCategory={recipesByCategory}
    />
  );
};

export { HomeTemplate };
