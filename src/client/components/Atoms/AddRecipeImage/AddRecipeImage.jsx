import { useState } from 'react';
import styles from './AddRecipeImage.module.css';
import { ReactComponent as Icon } from './iconAddRecipeImage.svg';

const AddRecipeImage = () => {
  return (
    <label className={styles.iconContainer} htmlFor="image">
      <input
        type="file"
        name="image"
        id="recipeImage"
        accept="image/png, image/jpg, image/jpeg"
        className={styles.input}
      />
      <div className={styles.icon}>
        <Icon />
      </div>
    </label>
  );
};

export { AddRecipeImage };
