// import { categories } from '../../testingArrays.js';
import { useEffect, useState } from 'react';

import { ReactComponent as Icon } from './iconAddCategoryInfo.svg';
import { AddDropdownList } from '#pages/addRecipe/components/Atoms/AddDropdownList/AddDropdownList.jsx';

// import { useSelector, useDispatch } from 'react-redux';
// import { selectCategories } from 'client/redux/categories/selectors.js';
// import { fetchCategories } from 'client/redux/categories/operations';

import styles from './AddCategoryInfo.module.css';

const AddCategoryInfo = () => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [categories, setCategories] = useState(false);
  const [value, setValue] = useState('Breakfast');

  // const categories = useSelector(selectCategories);
  // const disptach = useDispatch();

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

  const fetchCategories = async () => {
    fetch('http://localhost:5000/api/recipes/category-list')
      .then(response => {
        return response.json();
      })
      .then(data => {
        setCategories(data.data.file);
      });
  };

  useEffect(() => {}, [openDropdown]);

  useEffect(() => {
    // disptach(fetchCategories());
    fetchCategories();
  }, []);

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
