import styles from './AddIngredients.module.css';
import { AddIngridientName } from '../AddIngridientName/AddIngridientName.jsx';
import { AddIngridientUnit } from '../AddIngridientUnit/AddIngridientUnit.jsx';
import { AddIngridientCloseButton } from '../../Atoms/AddIngridientCloseButton/AddIngridientCloseButton.jsx';
import { AddRecipeHeaders } from '../../Atoms/AddRecipeHeader/AddRecipeHeader.jsx';

const AddIngredients = () => {
  return (
    <div className={styles.AddIngredients}>
      <div className={styles.header}>
        <AddRecipeHeaders isTitle={false}>Ingridients</AddRecipeHeaders>
      </div>
      <div className={styles.inputs}>
        <AddIngridientName />
        <AddIngridientUnit />
        <AddIngridientCloseButton />
      </div>
    </div>
  );
};

export { AddIngredients };
