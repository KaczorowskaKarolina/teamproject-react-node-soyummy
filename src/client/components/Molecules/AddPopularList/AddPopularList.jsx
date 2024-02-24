import styles from './AddPopularList.module.css';
import { AddPopularListItem } from 'client/components/Atoms/AddPopularListItem/AddPopularListItem';

const AddPopularList = ({ recipes }) => {
  return (
    <ul className={styles.AddPopularList}>
      {recipes.map((recipe, index) => (
        <AddPopularListItem key={index} recipe={recipe} />
      ))}
    </ul>
  );
};

export { AddPopularList };
