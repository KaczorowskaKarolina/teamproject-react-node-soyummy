import css from './HomeTemplate.module.css';
const { HomeOrganism } = require('../Organisms/HomeOrganism');

const HomeTemplate = ({ recipesByCategory }) => {
  return (
    <div>
      <HomeOrganism recipesByCategory={recipesByCategory} />;
    </div>
  );
};

export { HomeTemplate };
