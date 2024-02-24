import css from './ListHeader.module.css';

const ListHeader = () => {
  return (
    <ul className={css.ListHeader}>
      <li className={css.ListItem}>Ingredients</li>
      <li className={css.ListItem}>Amount</li>
      <li className={css.ListItem}>Add to list</li>
    </ul>
  );
};

export { ListHeader };
