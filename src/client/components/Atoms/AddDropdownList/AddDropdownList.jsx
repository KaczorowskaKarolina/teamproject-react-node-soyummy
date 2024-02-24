import styles from './AddDropdownList.module.css';

const AddDropdownList = ({
  array,
  filter = '',
  isCentered = false,
  onItemClick,
  sendDataToParent = () => {},
}) => {
  const classes = isCentered
    ? `${styles.listItem} ${styles.isCentered}`
    : `${styles.listItem}`;
  return (
    <div className={styles.AddDropdownList} data-scroll="">
      <ul className={styles.list} data-scroll="">
        {array &&
          array
            .filter(item =>
              item.ttl ? item.ttl.toLowerCase().includes(filter) : item
            )
            .map((item, index) => (
              <li
                key={index}
                className={classes}
                onClick={event => {
                  onItemClick(event);
                  sendDataToParent(item.id ? item.id : item);
                }}
                data-value={item.ttl ? item.ttl : item}
                data-scroll=""
              >
                {item.ttl ? item.ttl : item}
              </li>
            ))}
      </ul>
    </div>
  );
};

export { AddDropdownList };
