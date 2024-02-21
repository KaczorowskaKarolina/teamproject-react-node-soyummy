import styles from './AddIngredientsItem.module.css';
import { AddIngredientName } from '../AddIngredientName/AddIngredientName.jsx';
import { AddIngredientUnit } from '../AddIngredientUnit/AddIngredientUnit.jsx';
import { AddIngredientCloseButton } from '../../Atoms/AddIngredientCloseButton/AddIngredientCloseButton.jsx';

const AddIngredientsItem = () => {
  return (
    <li className={styles.AddIngredientsItem}>
      <AddIngredientName />
      <AddIngredientUnit />
      <AddIngredientCloseButton />
    </li>
  );
};

export { AddIngredientsItem };
