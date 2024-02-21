import styles from './AddRecipeIngredients.module.css';
import { AddIngridientName } from '../AddIngridientName/AddIngridientName.jsx';
import { AddIngridientUnit } from '../AddIngridientUnit/AddIngridientUnit.jsx';
import { AddIngridientCloseButton } from '../../Atoms/AddIngridientCloseButton/AddIngridientCloseButton.jsx';

const AddRecipeIngredients = () => {
  return (
    <div className={styles.AddRecipeIngredients}>
      <AddIngridientName />
      <AddIngridientUnit />
      <AddIngridientCloseButton />
    </div>
  );
};

export { AddRecipeIngredients };
