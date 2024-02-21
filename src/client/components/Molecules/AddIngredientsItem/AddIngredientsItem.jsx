import styles from './AddIngredientsItem.module.css';
import { AddIngridientName } from '../AddIngridientName/AddIngridientName.jsx';
import { AddIngridientUnit } from '../AddIngridientUnit/AddIngridientUnit.jsx';
import { AddIngridientCloseButton } from '../../Atoms/AddIngridientCloseButton/AddIngridientCloseButton.jsx';

const AddIngredientsItem = () => {
  return (
    <li className={styles.AddIngredientsItem}>
      <AddIngridientName />
      <AddIngridientUnit />
      <AddIngridientCloseButton />
    </li>
  );
};

export { AddIngredientsItem };
