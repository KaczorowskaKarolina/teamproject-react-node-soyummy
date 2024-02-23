import { nanoid } from 'nanoid';
import { useMediaQuery } from '@mui/material';

import { HomeAtomButton } from '../Atoms/HomeAtomButton.jsx';
import { CategoryAtom } from 'client/pages/categories/components/Atoms/categoryAtoms/CategoryAtom';
import { RecipeOrganism } from 'client/pages/categories/components/Organisms/recipeOrganisms/RecipeOrganism';

import css from './HomeOrganism.module.css';
import categoryPageCss from 'client/pages/categories/components/Templates/RecipeTemplate.module.css';

const HomeOrganism = ({ recipesByCategory }) => {
  const countOfElement = CheckMediaQuery();
  return recipesByCategory.map(recipe => {
    return (
      <ul className={css.HomeOrganism}>
        <CategoryAtom title={recipe.title} />
        <ul className={categoryPageCss.RecipeTemplate}>
          {recipe.recipes.map((recipe, index) => {
            while (index < countOfElement) {
              return (
                <RecipeOrganism
                  className={css.HomeOrganismButton}
                  key={nanoid()}
                  imageSource={recipe.thumb}
                  title={recipe.title}
                />
              );
            }
          })}
          <HomeAtomButton>
            <CategoryAtom title={recipe.title} />
          </HomeAtomButton>
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
