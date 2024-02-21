import styles from './AddIngredients.module.css';
import { AddRecipeHeaders } from '../../Atoms/AddRecipeHeader/AddRecipeHeader.jsx';
import { AddIngredientsCounter } from 'client/components/Atoms/AddIngredientsCounter/AddIngredientsCounter';
import { AddIngredientsItem } from '../../Molecules/AddIngredientsItem/AddIngredientsItem';
import { useEffect, useState } from 'react';

const AddIngredients = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {}, [counter]);

  const handleMinus = () => {
    setCounter(counter => {
      counter--;
    });
  };
  const handlePlus = () => {
    console.log(counter);
    setCounter(counter => {
      counter++;
    });
  };
  return (
    <div className={styles.AddIngredients}>
      <div className={styles.header}>
        <AddRecipeHeaders isTitle={false}>Ingridients</AddRecipeHeaders>
        <AddIngredientsCounter
          minusCb={handleMinus}
          plusCb={handlePlus}
          counter={counter}
        />
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
