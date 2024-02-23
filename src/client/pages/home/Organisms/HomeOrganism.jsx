import { useMediaQuery } from '@mui/material';

import css from './HomeOrganism.module.css';
import { CategoryAtom } from 'client/pages/categories/components/Atoms/categoryAtoms/CategoryAtom';
import { RecipeOrganism } from 'client/pages/categories/components/Organisms/recipeOrganisms/RecipeOrganism';

const HomeOrganism = ({ recipesByCategory }) => {
  const countOfElement = CheckMediaQuery();
  console.log(countOfElement);
  return recipesByCategory.map(recipe => {
    return (
      <ul className={css.HomeOrganism}>
        <CategoryAtom title={recipe.title} />
        <ul>
          {recipe.recipes.map((recipe, index) => {
            while (index < countOfElement) {
              return (
                <RecipeOrganism
                  imageSource={recipe.thumb}
                  title={recipe.title}
                  id={recipe._id}
                />
              );
            }
          })}
        </ul>
      </ul>
    );
  });
};

function CheckMediaQuery() {
  const matchesMobile = useMediaQuery('(min-width:20em)');
  const matchesTablet = useMediaQuery('(min-width:30em)');
  const matchesDesktop = useMediaQuery('(min-width:48em)');

  if (matchesDesktop) {
    return 4;
  }
  if (matchesTablet) {
    return 2;
  }
  if (matchesMobile) {
    return 1;
  }
}

export { HomeOrganism };