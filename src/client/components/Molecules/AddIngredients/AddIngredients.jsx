import styles from './AddIngredients.module.css';
import { AddRecipeHeaders } from '../../Atoms/AddRecipeHeader/AddRecipeHeader.jsx';
import { AddIngridientsCounter } from 'client/components/Atoms/AddIngridientsCounter/AddIngridientsCounter';
import { AddIngredientsItem } from '../AddIngredientsItem/AddIngredientsItem';

const AddIngredients = () => {
  return (
    <div className={styles.AddIngredients}>
      <div className={styles.header}>
        <AddRecipeHeaders isTitle={false}>Ingridients</AddRecipeHeaders>
        <AddIngridientsCounter />
      </div>
      <ul className={styles.inputs}>
        <AddIngredientsItem />
        <AddIngredientsItem />
        <AddIngredientsItem />
      </ul>
    </div>
  );
};

export { AddIngredients };
