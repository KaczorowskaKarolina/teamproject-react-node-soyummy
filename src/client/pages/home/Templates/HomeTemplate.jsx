import { useDispatch } from 'react-redux';

import { HomeOrganism } from '../Organisms/HomeOrganism';
import { changeQuery } from 'client/redux/categories/operations';
import { HomeAtomButtonLoadMore } from '../Atoms/HomeAtomButtonLoadMore';

import css from './HomeTemplate.module.css';

const HomeTemplate = ({ recipesByCategory, hideLoadButton }) => {
  const dispatch = useDispatch();
  const handleLoadMore = () => {
    dispatch(changeQuery(4));
  };
  return (
    <div className={css.HomeTemplate}>
      <HomeOrganism recipesByCategory={recipesByCategory} />
      {!hideLoadButton && (
        <HomeAtomButtonLoadMore
          title="Other categories"
          onClick={handleLoadMore}
        />
      )}
    </div>
  );
};

export { HomeTemplate };
