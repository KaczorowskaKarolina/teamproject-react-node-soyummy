import React from 'react';
import styles from './ShoppingListItem.module.css';
import XIcon from './Xicon.svg';
// import { useDispatch } from 'react-redux';
// import { removeFromShoppingList } from '../../redux/shopping-list/operations';

const ShoppingListItem = ({ product }) => {
  // const dispatch = useDispatch();

  const handleRemoveClick = () => {
    console.log(test);
    // dispatch(removeFromShoppingList(product));
  };

  return (
    <div className={styles.item}>
      <div className={styles.descriptionContainer}>
        <div className={styles.shoppingImageContainer}>
          <img
            src={product.image}
            alt={product.name}
            className={styles.shoppingImage}
          />
        </div>

        <div className={styles.productName}>{product.name}</div>
      </div>

      <div className={styles.numberContainer}>
        <div className={styles.productQuantity}>
          {product.quantity ?? 'No info'}
        </div>
        <button onClick={handleRemoveClick} className={styles.deleteBtn}>
          <img src={XIcon} alt="Remove" className={styles.crossIcon} />
        </button>
      </div>
    </div>
  );
};

export default ShoppingListItem;
