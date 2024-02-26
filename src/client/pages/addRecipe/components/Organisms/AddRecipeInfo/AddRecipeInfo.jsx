import styles from './AddRecipeInfo.module.css';
import { AddRecipeInfoInput } from '../../Atoms/AddRecipeInfoInput/AddRecipeInfoInput.jsx';
import { AddCategoryInfo } from '../../Molecules/AddCategoryInfo/AddCategoryInfo.jsx';
import { AddTimeInfo } from '../../Molecules/AddTimeInfo/AddTimeInfo.jsx';

const AddRecipeInfo = () => {
  return (
    <div className={styles.AddRecipeInfo}>
      <AddRecipeInfoInput placeholder="Enter recipe name" idName="recipeName" />
      <AddRecipeInfoInput
        placeholder="Enter about recipe"
        idName="recipeAbout"
      />
      <AddCategoryInfo />
      <AddTimeInfo />
    </div>
  );
};

export { AddRecipeInfo };
