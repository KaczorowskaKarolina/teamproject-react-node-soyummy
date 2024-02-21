import styles from './AddIngredients.module.css';
import { AddRecipeHeaders } from '../../Atoms/AddRecipeHeader/AddRecipeHeader.jsx';
import { AddIngredientsCounter } from 'client/components/Atoms/AddIngredientsCounter/AddIngredientsCounter';
import { AddIngredientsItem } from '../../Molecules/AddIngredientsItem/AddIngredientsItem';

const AddIngredients = () => {
  return (
    <div className={styles.AddIngredients}>
      <div className={styles.header}>
        <AddRecipeHeaders isTitle={false}>Ingridients</AddRecipeHeaders>
        <AddIngredientsCounter />
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
