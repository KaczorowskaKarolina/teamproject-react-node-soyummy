import { CategoriesText } from '../../Atoms/categoryAtoms/CategoriesText';
import { Square } from '../../Atoms/categoryAtoms/SquareAtom';
import { CategoryMolecule } from '../../Molecules/categoryMolecules/CategoryMolecule';
import css from './CategoryOrganism.module.css';

const CategoryOrganism = ({ titles }) => {
  return (
    <div>
      <CategoriesText />
      <Square />
      <ul className={css.CategoryOrganism}>
        {titles &&
          titles.map(el => {
            return <CategoryMolecule title={el} />;
          })}
      </ul>
    </div>
  );
};

export { CategoryOrganism };
