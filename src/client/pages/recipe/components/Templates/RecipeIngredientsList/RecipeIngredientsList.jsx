import { ListHeader } from '#pages/recipe/components/Atoms/ListHeader/ListHeader.jsx';
import { IngBox } from '#pages/recipe/components/Organisms/IngBox/IngBox.jsx';
// import { getIngList } from 'client/pages/recipe/handlers/getIngList.js';
import css from './RecipeIngredientsList.module.css';
import { useEffect, useState } from 'react';

const RecipeIngredientsList = ({ ingList }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async ingArray => {
      try {
        const ingReturnedArray = await Promise.all(
          ingArray.map(async ing => {
            const { id, measure } = ing;
            const response = await fetch(
              `http://localhost:5000/api/getIngredientById/${id}`
            );
            const responseJson = await response.json();
            const [{ thb, ttl }] = await responseJson.data.file;
            const returnedIngredients = { thb, ttl, id, measure };

            return returnedIngredients;
          })
        );

        return setData(ingReturnedArray);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData(ingList);
  }, [ingList]);

  return (
    <div className={css.RecipeIngredientsList}>
      <div className={css.IngListHeader}>
        <ListHeader />
      </div>
      <div className={css.IngListElements}>
        {data &&
          data.map(ing => {
            const { id, measure, ttl, thb } = ing;

            return (
              <IngBox
                ingImageUrl={thb}
                ingTitle={ttl}
                ingAmount={measure}
                key={id}
              />
            );
          })}
      </div>
    </div>
  );
};

export { RecipeIngredientsList };
