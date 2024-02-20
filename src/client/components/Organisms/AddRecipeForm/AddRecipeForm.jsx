import styles from './AddRecipeForm.module.css';
import { AddRecipeImage } from '../../Atoms/AddRecipeImage/AddRecipeImage.jsx';
import { AddRecipeHeaders } from '../../Atoms/AddRecipeHeader/AddRecipeHeader.jsx';
import { AddRecipeInfoInput } from '../../Molecules/AddRecipeInfoInput/AddRecipeInfoInput.jsx';
import { AddRecipeIngredients } from '../../Molecules/AddRecipeIngredientsInput/AddRecipeIngredients.jsx';
import { AddRecipeTextarea } from '../../Atoms/AddRecipeTextarea/AddRecipeTextarea.jsx';
import { CurvedButton } from '../../Atoms/CurvedButton/CurvedButton.jsx';

const AddRecipeForm = () => {
  return (
    <form
      className={styles.AddRecipeForm}
      onSubmit={event => {
        event.preventDefault();
        console.log(event);
      }}
    >
      <AddRecipeImage />
      <AddRecipeInfoInput />
      <AddRecipeHeaders isTitle={false}>Ingridients</AddRecipeHeaders>
      <AddRecipeIngredients />
      <AddRecipeHeaders isTitle={false}>Recipe Preparetion</AddRecipeHeaders>
      <AddRecipeTextarea />
      <CurvedButton greenOrBlack={'black'} type="submit" title={'Add recipe'} />
    </form>
  );
};

export { AddRecipeForm };
