import { useDispatch, useSelector } from 'react-redux';
import css from './HomeTemplate.module.css';
import { changeQuery } from 'client/redux/categories/operations';
import { HomeAtomButtonLoadMore } from '../Atoms/HomeAtomButtonLoadMore';
import { selectCategories } from 'client/redux/categories/selectors';
const { HomeOrganism } = require('../Organisms/HomeOrganism');

const HomeTemplate = ({ recipesByCategory }) => {
  const dispatch = useDispatch();
  let countOfCategories = useSelector(selectCategories);
  const handleLoadMore = () => {
    // console.log(countOfCategories);
    // const differenceOfShownCategories = countOfCategories - query;
    dispatch(changeQuery(4));
  };
  return (
    <div className={css.HomeTemplate}>
      <HomeOrganism recipesByCategory={recipesByCategory} />
      <HomeAtomButtonLoadMore
        title="Other categories"
        onClick={handleLoadMore}
      />
    </div>
  );
};

export { HomeTemplate };

// const handleLoadMore = () => {
//   dispatch(changeQuery(+4));
//   const differenceOfShownCategories = countOfCategories - query;
//   // console.log(differenceOfShownCategories);
//   // console.log(countOfCategories);
//   if (differenceOfShownCategories < 4) {
//     dispatch(changeQuery(differenceOfShownCategories));
//     return;
//   }
//   if (countOfCategories.length > query) {
//     dispatch(changeQuery(+4));
//     return;
//   }
// };
