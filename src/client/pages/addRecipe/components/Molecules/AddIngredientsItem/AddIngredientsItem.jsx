import { AddIngredientName } from '../AddIngredientName/AddIngredientName.jsx';
import { AddIngredientUnit } from '../AddIngredientUnit/AddIngredientUnit.jsx';
import { AddIngredientCloseButton } from '../../Atoms/AddIngredientCloseButton/AddIngredientCloseButton.jsx';

import styles from './AddIngredientsItem.module.css';

const AddIngredientsItem = ({ id, onClose }) => {
  return (
    <li className={styles.AddIngredientsItem}>
      <div className={styles.Input}>
        <AddIngredientName />
      </div>
      <div>
        <AddIngredientUnit />
      </div>
      <div className={styles.CloseButton}>
        <AddIngredientCloseButton onClick={onClose} id={id} />
      </div>
    </li>
  );
};

export { AddIngredientsItem };
