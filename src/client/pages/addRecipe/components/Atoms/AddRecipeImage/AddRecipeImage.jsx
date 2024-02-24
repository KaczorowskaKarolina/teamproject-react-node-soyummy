import { useEffect, useState } from 'react';

import { ReactComponent as Icon } from './iconAddRecipeImage.svg';

import styles from './AddRecipeImage.module.css';

const AddRecipeImage = () => {
  const [file, setFile] = useState();
  const [imagePath, setImageUrl] = useState();

  useEffect(() => {
    if (!file) {
      return;
    }
    console.log('Test');
    const reader = new FileReader();

    reader.onloadend = () => {
      setImageUrl(reader.result);
    };

    reader.readAsDataURL(file);
  }, [file]);

  const onUpload = event => {
    console.log('Test2');
    setFile(event.target.files[0]);
  };

  useEffect(() => {}, [imagePath]);
  return (
    <label className={styles.iconContainer} htmlFor="image">
      <input
        type="file"
        name="image"
        id="recipeImage"
        accept="image/png, image/jpg, image/jpeg"
        className={styles.input}
        onChange={onUpload}
      />
      {!imagePath && (
        <div className={styles.icon}>
          <Icon />
        </div>
      )}
      {imagePath && (
        <img className={styles.imageBackground} src={imagePath} alt="Preview" />
      )}
    </label>
  );
};

export { AddRecipeImage };
