import styles from './PopularRecipeInfo.module.css';

const PopularRecipeInfo = () => {
  return (
    <div className={styles.PopularRecipeInfo}>
      <p className={styles.popularTitle}>Testing title</p>
      <p className={styles.popularDescription}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui voluptatum
        cupiditate dignissimos dolor quam, labore doloremque velit obcaecati
        illo sapiente dicta aliquid minima laudantium odit doloribus voluptates.
        Iusto, libero consequatur.
      </p>
    </div>
  );
};

export { PopularRecipeInfo };
