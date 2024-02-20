import styles from './AddRecipeIngredients.module.css';
import { AddIngridientName } from '../../Atoms/AddIngridientName/AddIngridientName.jsx';
import { AddIngridientAmount } from '../../Atoms/AddIngridientAmount/AddIngridientAmount.jsx';
import { AddIngridientCloseButton } from '../../Atoms/AddIngridientCloseButton/AddIngridientCloseButton.jsx';

const AddRecipeIngredients = () => {
  return (
    <div className={styles.AddRecipeIngredients}>
      <AddIngridientName />
      <AddIngridientAmount />
      <AddIngridientCloseButton />
    </div>
  );
};

export { AddRecipeIngredients };
