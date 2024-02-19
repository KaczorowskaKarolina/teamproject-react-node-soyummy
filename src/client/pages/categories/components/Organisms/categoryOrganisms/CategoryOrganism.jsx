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
        {titles && titles.map(el => <CategoryMolecule title={el} key={el} />)}
      </ul>
    </div>
  );
};

export { CategoryOrganism };
