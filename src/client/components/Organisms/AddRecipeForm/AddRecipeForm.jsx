import styles from './AddRecipeForm.module.css';
import { AddRecipeImage } from '../../Atoms/AddRecipeImage/AddRecipeImage.jsx';
import { AddRecipeHeaders } from '../../Atoms/AddRecipeHeader/AddRecipeHeader.jsx';
import { AddRecipeInfo } from '../AddRecipeInfo/AddRecipeInfo';
import { AddIngredients } from '../../Molecules/AddIngredientsInput/AddIngredients.jsx';
import { AddRecipeTextarea } from '../../Atoms/AddRecipeTextarea/AddRecipeTextarea.jsx';
import { CurvedButton } from '../../Atoms/CurvedButton/CurvedButton.jsx';

const AddRecipeForm = () => {
  return (
    <form
      className={styles.AddRecipeForm}
      onSubmit={event => {
        event.preventDefault();
        const form = event.currentTarget;
        console.log(form);
      }}
    >
      <AddRecipeImage />
      <AddRecipeInfo />
      <AddRecipeHeaders isTitle={false}>Ingridients</AddRecipeHeaders>
      <AddIngredients />
      <AddRecipeHeaders isTitle={false}>Recipe Preparetion</AddRecipeHeaders>
      <AddRecipeTextarea />
      <CurvedButton greenOrBlack={'black'} type="submit" title={'Add recipe'} />
    </form>
  );
};

export { AddRecipeForm };
