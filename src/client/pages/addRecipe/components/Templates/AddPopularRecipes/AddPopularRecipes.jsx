import styles from './AddPopularRecipes.module.css';
import { AddRecipeHeaders } from '../../Atoms/AddRecipeHeader/AddRecipeHeader.jsx';
import { AddPopularList } from '../../Molecules/AddPopularList/AddPopularList';
import { useEffect, useState } from 'react';

// import { useSelector } from 'react-redux';
// import { selectRecipes } from 'client/redux/recipes/selectors.js';

const array = [
  {
    title: 'Tsting process',
    preview: 'none',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores pariatur minus modi, eius suscipit voluptatem voluptatibus eaque ab? Ipsum, numquam.',
  },
  {
    title: 'Tsting process',
    preview: 'none',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores pariatur minus modi, eius suscipit voluptatem voluptatibus eaque ab? Ipsum, numquam.',
  },
  {
    title: 'Tsting process',
    preview: 'none',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores pariatur minus modi, eius suscipit voluptatem voluptatibus eaque ab? Ipsum, numquam.',
  },
  {
    title: 'Tsting process',
    preview: 'none',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores pariatur minus modi, eius suscipit voluptatem voluptatibus eaque ab? Ipsum, numquam.',
  },
  {
    title: 'Tsting process',
    preview: 'none',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores pariatur minus modi, eius suscipit voluptatem voluptatibus eaque ab? Ipsum, numquam.',
  },
];

const AddPopularRecipes = () => {
  // const recipes = useSelector(selectRecipes);

  const [recipes, setRecipes] = useState([]);
  const fetchPopular = async () => {
    fetch('http://localhost:5000/api/recipes/popular-recipe')
      .then(data => {
        return data.json();
      })
      .then(recipes => {
        console.log(recipes.data);
        setRecipes(recipes.data.file);
      });
  };
  useEffect(() => {
    fetchPopular();
  }, []);
  useEffect(() => {}, [recipes]);
  return (
    <div className={styles.AddPopularRecipes}>
      <AddRecipeHeaders isTitle={false}>Popular Recipes</AddRecipeHeaders>
      <AddPopularList recipes={recipes} />
    </div>
  );
};

export { AddPopularRecipes };
