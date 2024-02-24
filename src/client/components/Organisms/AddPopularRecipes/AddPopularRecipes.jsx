import styles from './AddPopularRecipes.module.css';
import { AddRecipeHeaders } from '../../Atoms/AddRecipeHeader/AddRecipeHeader.jsx';
import { AddPopularList } from '../../Molecules/AddPopularList/AddPopularList';

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
  return (
    <div className={styles.AddPopularRecipes}>
      <AddRecipeHeaders isTitle={false}>Popular Recipes</AddRecipeHeaders>
      <AddPopularList recipes={array} />
    </div>
  );
};

export { AddPopularRecipes };
