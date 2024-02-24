import styles from './AddIngredientUnit.module.css';
import { AddDropdownList } from '../AddDropdownList/AddDropdownList.jsx';
import { useState } from 'react';
import { ReactComponent as Icon } from './iconAddIngredientUnit.svg';

const AddIngredientUnit = () => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [value, setValue] = useState('');
  const unitTypes = ['tbs', 'tsp', 'kg', 'g', 'ml', 'l'];

  const handleCloseDropdown = event => {
    if (!event.target.dataset.scroll) {
      setOpenDropdown(false);
      window.removeEventListener('click', handleCloseDropdown);
      return;
    }
    return;
  };

  const handleOpenDropdown = event => {
    setOpenDropdown(true);
    setTimeout(() => {
      window.addEventListener('click', handleCloseDropdown);
    }, 100);
  };

  const changeValue = event => {
    setValue(event.target.dataset.value);
  };

  return (
    <label htmlFor="ingdredientAmount" className={styles.AddIngredientUnit}>
      <input
        name="amount"
        id="ingdredientAmount"
        className={styles.inputAmount}
        type="text"
        autoComplete="off"
      />
      <input
        id="amountUnit"
        className={styles.inputUnit}
        readOnly="readOnly"
        value={value}
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
          onItemClick={changeValue}
        />
      )}
    </label>
  );
};

export { AddIngredientUnit };
