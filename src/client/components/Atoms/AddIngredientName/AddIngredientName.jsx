import styles from './AddIngredientName.module.css';
import { AddDropdownList } from '../AddDropdownList/AddDropdownList';
import { useEffect, useState } from 'react';
import { ingredientsType } from 'client/components/testingArrays';
import { ReactComponent as Icon } from './iconAddIngredientName.svg';

const AddIngredientName = () => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [value, setValue] = useState('');
  const [filter, setFilter] = useState('');

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
    !openDropdown && setOpenDropdown(true);
    setFilter(event.target.value);
    setValue(event.target.value);
    window.addEventListener('click', handleCloseDropdown);
  };

  useEffect(() => {}, [openDropdown]);
  return (
    <label htmlFor="ingdredientNames" className={styles.AddIngredientName}>
      <input
        list="ingredients"
        name="ingdredientName"
        id="ingdredientNames"
        className={styles.input}
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
        <AddDropdownList
          array={ingredientsType}
          filter={filter}
          onItemClick={changeValue}
        />
      )}
      {/* <datalist id="ingredients">
        <option value="Chicken"></option>
        <option value="Beef"></option>
        <option value="Avocado"></option>
        <option value="Bread"></option>
        <option value="Ham"></option>
      </datalist> */}
    </label>
  );
};

export { AddIngredientName };
