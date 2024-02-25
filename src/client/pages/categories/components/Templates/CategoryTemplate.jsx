// import { useParams } from 'react-router-dom';

import { useEffect, useState } from 'react';
import { CategoryAtom } from '../Atoms/CategoryAtom.jsx';

const CategoryTemplate = () => {
  //   const { categoryName } = useParams();
  //   http://localhost:5000/getAllCategoriesList
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'http://localhost:3000/getAllCategoriesList'
        );

        if (!response.ok) {
          throw new Error('Ups idź spać!');
        }

        const responseData = await response.json();
        const categoriesArray = responseData.data.file;

        const categoriesTitleList = categoriesArray.map(
          category => category.title
        );

        setCategories(categoriesTitleList);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {categories &&
        categories.map(category => (
          <CategoryAtom title={category} key={category} />
        ))}
    </div>
  );
};

export { CategoryTemplate };
