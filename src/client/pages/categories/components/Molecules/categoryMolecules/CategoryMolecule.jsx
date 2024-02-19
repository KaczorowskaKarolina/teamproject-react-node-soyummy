import { nanoid } from 'nanoid';
import { CategoryAtom } from '../../Atoms/categoryAtoms/CategoryAtom';
import css from './CategoryMolecule.module.css';

const id = nanoid();

const CategoryMolecule = ({ title }) => {
  return (
    <li className={css.categoryMolecule} key={id}>
      <CategoryAtom title={title} />
    </li>
  );
};

export { CategoryMolecule };
