import styles from './AddPopularListItem.module.css';

const AddPopularListItem = ({ recipe }) => {
  return (
    <div className={styles.AddPopularListItem}>
      <img className={styles.image} src={recipe.preview} />
      <div className={styles.info}>
        <p className={styles.title}>{recipe.title}</p>
        <span className={styles.about}>{recipe.description}</span>
      </div>
    </div>
  );
};

export { AddPopularListItem };
