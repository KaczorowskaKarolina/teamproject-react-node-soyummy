import styles from './AddRecipeHeader.module.css';

const AddRecipeHeaders = ({ isTitle = false, children }) => {
  const classes = `${styles.header} ${
    isTitle ? styles.pageHeader : styles.formHeader
  }`;
  return (
    <>
      {isTitle && <h1 className={classes}>{children}</h1>}
      {!isTitle && <h2 className={classes}>{children}</h2>}
    </>
  );
};

export { AddRecipeHeaders };
