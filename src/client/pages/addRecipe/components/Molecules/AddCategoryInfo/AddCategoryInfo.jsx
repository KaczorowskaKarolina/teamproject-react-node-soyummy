import { categories } from '../../testingArrays.js';
import { useEffect, useState } from 'react';

import { ReactComponent as Icon } from './iconAddCategoryInfo.svg';
import { AddDropdownList } from '#pages/addRecipe/components/Atoms/AddDropdownList/AddDropdownList.jsx';

import styles from './AddCategoryInfo.module.css';

const AddCategoryInfo = () => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [value, setValue] = useState('Breakfast');

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

  const onChange = event => {
    setValue(event.target.value);
  };

  useEffect(() => {}, [openDropdown]);

  return (
    <label className={styles.AddCategoryInfo}>
      Category
      <div className={styles.inputContainer}>
        <input
          name="recipeCategory"
          id="recipeCategory"
          className={styles.input}
          type="text"
          readOnly="readOnly"
          onChange={onChange}
          value={value}
          data-scroll=""
        />
        <button
          className={styles.icon}
          type="button"
          onClick={handleOpenDropdown}
        >
          <Icon />
        </button>
        {openDropdown && (
          <AddDropdownList array={categories} onItemClick={changeValue} />
        )}
      </div>
    </label>
  );
};

export { AddCategoryInfo };
