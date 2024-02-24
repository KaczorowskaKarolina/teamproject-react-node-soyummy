import { ReactComponent as Icon } from './iconAddTimeInfo.svg';
import { useEffect, useState } from 'react';

import { AddDropdownList } from '../../Atoms/AddDropdownList/AddDropdownList.jsx';

import styles from './AddTimeInfo.module.css';

const AddTimeInfo = () => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [value, setValue] = useState('');
  const [timeArray, setTimeArray] = useState([]);

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

  useEffect(() => {
    const array = [];
    for (let i = 10; i < 200; i = i + 5) {
      array.push(i.toString());
    }
    setTimeArray(array);
  }, []);
  return (
    <label htmlFor="recipeTime" className={styles.AddTimeInfo}>
      Cooking time
      <div className={styles.inputContainer}>
        <input
          name="recipeTime"
          id="recipeTime"
          className={styles.input}
          type="text"
          onChange={onChange}
          value={value}
          data-scroll=""
        />
        min
        <button
          className={styles.icon}
          type="button"
          onClick={handleOpenDropdown}
        >
          <Icon />
        </button>
        {openDropdown && (
          <AddDropdownList
            array={timeArray}
            isCentered={true}
            onItemClick={changeValue}
          />
        )}
      </div>
    </label>
  );
};

export { AddTimeInfo };
