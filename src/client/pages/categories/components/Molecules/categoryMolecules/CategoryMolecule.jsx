import { CategoryAtom } from '../../Atoms/categoryAtoms/CategoryAtom';
import css from './CategoryMolecule.module.css';

const CategoryMolecule = ({ title, id }) => {
  return (
    <li className={css.categoryMolecule}>
      <CategoryAtom title={title} />
    </li>
  );
};

export { CategoryMolecule };
