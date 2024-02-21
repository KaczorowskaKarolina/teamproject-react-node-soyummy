import styles from './AddRecipeInfo.module.css';
import { AddRecipeInfoInput } from 'client/components/Atoms/AddRecipeInfoInput/AddRecipeInfoInput';
import { AddCategoryInfo } from 'client/components/Atoms/AddCategoryInfo/AddCategoryInfo';
import { AddTimeInfo } from 'client/components/Atoms/AddTimeInfo/AddTimeInfo';

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
