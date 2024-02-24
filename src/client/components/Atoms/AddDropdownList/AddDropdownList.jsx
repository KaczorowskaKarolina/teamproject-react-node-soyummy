import styles from './AddDropdownList.module.css';

const AddDropdownList = ({ array, filter = '', onItemClick }) => {
  return (
    <div className={styles.AddDropdownList} data-scroll="">
      <ul className={styles.list} data-scroll="">
        {array &&
          array
            .filter(item => item.toLowerCase().includes(filter))
            .map((item, index) => (
              <li
                key={index}
                className={styles.listItem}
                onClick={onItemClick}
                data-value={item}
                data-scroll=""
              >
                {item}
              </li>
            ))}
      </ul>
    </div>
  );
};

export { AddDropdownList };
