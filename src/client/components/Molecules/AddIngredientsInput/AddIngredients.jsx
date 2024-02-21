import styles from './AddIngredients.module.css';
import { AddIngridientName } from '../AddIngridientName/AddIngridientName.jsx';
import { AddIngridientUnit } from '../AddIngridientUnit/AddIngridientUnit.jsx';
import { AddIngridientCloseButton } from '../../Atoms/AddIngridientCloseButton/AddIngridientCloseButton.jsx';

const AddIngredients = () => {
  return (
    <div className={styles.AddRecipeIngredients}>
      <AddIngridientName />
      <AddIngridientUnit />
      <AddIngridientCloseButton />
    </div>
  );
};

export { AddIngredients };
