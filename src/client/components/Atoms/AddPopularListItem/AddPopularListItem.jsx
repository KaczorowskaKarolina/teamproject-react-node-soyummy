import styles from './AddPopularListItem.module.css';

const AddPopularListItem = ({ recipe }) => {
  return (
    <div className={styles.AddPopularListItem}>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={recipe.preview} />
      </div>
      <div className={styles.info}>
        <p className={styles.title}>{recipe.title}</p>
        <span className={styles.about}>{recipe.description}</span>
      </div>
    </div>
  );
};

export { AddPopularListItem };
