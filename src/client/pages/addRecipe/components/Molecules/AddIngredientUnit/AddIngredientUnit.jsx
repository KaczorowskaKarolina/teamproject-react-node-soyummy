import { ReactComponent as Icon } from './iconAddIngredientUnit.svg';
import { useState } from 'react';

import { AddDropdownList } from '../../Atoms/AddDropdownList/AddDropdownList.jsx';

import styles from './AddIngredientUnit.module.css';

const AddIngredientUnit = () => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [unit, setUnit] = useState('g');
  const unitTypes = ['tbs', 'tsp', 'kg', 'g', 'ml', 'l'];

  const handleCloseDropdown = event => {
    if (!event.target.dataset.scroll) {
      setOpenDropdown(false);
      window.removeEventListener('click', handleCloseDropdown);
    }
  };

  const handleOpenDropdown = event => {
    setOpenDropdown(true);
    setTimeout(() => {
      window.addEventListener('click', handleCloseDropdown);
    }, 100);
  };

  const changeAmount = event => {
    event.target.dataset.id = event.target.value;
  };

  const changeUnit = event => {
    setUnit(event.target.dataset.value);
  };

  return (
    <label className={styles.AddIngredientUnit}>
      <input
        name="ingredientAmount"
        className={styles.inputAmount}
        type="text"
        autoComplete="off"
        onChange={changeAmount}
      />
      <input
        name="ingredientUnit"
        className={styles.inputUnit}
        readOnly="readOnly"
        value={unit}
        data-id={unit}
      />
      <button
        className={styles.icon}
        type="button"
        onClick={handleOpenDropdown}
      >
        <Icon />
      </button>
      {openDropdown && (
        <AddDropdownList
          array={unitTypes}
          isCentered={true}
          onItemClick={changeUnit}
        />
      )}
    </label>
  );
};

export { AddIngredientUnit };
