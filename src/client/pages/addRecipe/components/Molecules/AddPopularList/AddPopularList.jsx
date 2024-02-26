import { AddPopularListItem } from '../../Atoms/AddPopularListItem/AddPopularListItem.jsx';

import styles from './AddPopularList.module.css';

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
