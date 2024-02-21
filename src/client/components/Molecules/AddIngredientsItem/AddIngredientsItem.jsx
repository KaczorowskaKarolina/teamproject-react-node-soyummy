import styles from './AddIngredientsItem.module.css';
import { AddIngredientName } from '../../Atoms/AddIngredientName/AddIngredientName.jsx';
import { AddIngredientUnit } from '../../Atoms/AddIngredientUnit/AddIngredientUnit.jsx';
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
