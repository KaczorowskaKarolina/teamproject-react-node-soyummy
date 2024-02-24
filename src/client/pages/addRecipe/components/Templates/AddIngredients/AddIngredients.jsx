import styles from './AddIngredients.module.css';
import { AddRecipeHeaders } from '../../Atoms/AddRecipeHeader/AddRecipeHeader.jsx';
import { AddIngredientsCounter } from '../../Atoms/AddIngredientsCounter/AddIngredientsCounter.jsx';
import { AddIngredientsItem } from '../../Molecules/AddIngredientsItem/AddIngredientsItem.jsx';
import { useEffect, useState } from 'react';

const AddIngredients = () => {
  const [counter, setCounter] = useState([]);

  const handleMinus = () => {
    if (counter.length > 1) {
      const copyArray = counter.slice(0, -1);
      setCounter(copyArray);
    }
  };
  const handlePlus = () => {
    const copyArray = [...counter];
    copyArray.push(copyArray[copyArray.length - 1] + 1);
    setCounter(copyArray);
  };
  const handleClose = event => {
    const value = event.target.closest('button').dataset.counter;
    if (counter.length > 1) {
      const copyArray = counter.filter(item => item !== Number(value));
      setCounter(copyArray);
    }
  };
  useEffect(() => {}, [counter]);

  useEffect(() => {
    setCounter([1]);
  }, []);
  return (
    <div className={styles.AddIngredients}>
      <div className={styles.header}>
        <AddRecipeHeaders isTitle={false}>Ingredients</AddRecipeHeaders>
        <AddIngredientsCounter
          minusCb={handleMinus}
          plusCb={handlePlus}
          counter={counter.length}
        />
      </div>
      <div className={styles.inputsStyles}>
        <ul className={styles.inputs}>
          {counter.map(
            item =>
              item !== 0 && (
                <AddIngredientsItem key={item} id={item} onClose={handleClose} />
              )
          )}
        </ul>
      </div>
    </div>
  );
};

export { AddIngredients };
