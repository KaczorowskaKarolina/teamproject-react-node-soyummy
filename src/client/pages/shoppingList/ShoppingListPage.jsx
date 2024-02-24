import React, { useEffect } from 'react';
import ShoppingListItem from '../../components/Organisms/ShoppingListItem/ShoppingListItem';
// import { useDispatch, useSelector } from 'react-redux';
// import { selectShoppingList } from '../../redux/shopping-list/selectors';
// import { getShoppingList } from '../../redux/shopping-list/operations';

import styles from './ShoppingList.module.css';

const ShoppingListPage = () => {
  // const dispatch = useDispatch();
  // const shoppingList = useSelector(selectShoppingList);
  const shoppingList = [
    {
      id: 1,
      name: 'avocado',
    },
    { id: 2, name: 'banana' },
    { id: 3, name: 'apple' },
    { id: 4, name: 'orange' },
    { id: 5, name: 'strawberry' },
  ];

  useEffect(() => {
    // dispatch(getShoppingList());
  }, []);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.pageTitle}>Shopping list</div>

      {shoppingList.length <= 0 && (
        <div className={styles.notFound}>
          <p>There are no products in your shopping list</p>
        </div>
      )}

      {shoppingList.length > 0 && (
        <>
          <div className={styles.productsHead}>
            <div>Products</div>
            <div className={styles.headContainer}>
              <div>Quantity</div>
              <div>Remove</div>
            </div>
          </div>

          <div className={styles.shoppingList}>
            {shoppingList.map(product => (
              <div key={product._id} className={styles.item}>
                <ShoppingListItem product={product} />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export { ShoppingListPage };
