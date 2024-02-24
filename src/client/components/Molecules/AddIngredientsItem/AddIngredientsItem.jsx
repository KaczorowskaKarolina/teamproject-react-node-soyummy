import styles from './AddIngredientsItem.module.css';
import { AddIngredientName } from '../../Atoms/AddIngredientName/AddIngredientName.jsx';
import { AddIngredientUnit } from '../../Atoms/AddIngredientUnit/AddIngredientUnit.jsx';
import { AddIngredientCloseButton } from '../../Atoms/AddIngredientCloseButton/AddIngredientCloseButton.jsx';

const AddIngredientsItem = ({ id, onClose }) => {
  return (
    <li className={styles.AddIngredientsItem}>
      <AddIngredientName />
      <AddIngredientUnit />
      <AddIngredientCloseButton onClick={onClose} id={id} />
    </li>
  );
};

export { AddIngredientsItem };
