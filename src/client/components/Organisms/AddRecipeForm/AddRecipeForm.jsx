import styles from './AddRecipeForm.module.css';
import { AddRecipeImage } from '../../Atoms/AddRecipeImage/AddRecipeImage.jsx';
import { AddRecipeHeaders } from '../../Atoms/AddRecipeHeader/AddRecipeHeader.jsx';
import { AddRecipeInfoInput } from '../../Molecules/AddRecipeInfoInput/AddRecipeInfoInput.jsx';
import { AddRecipeIngredients } from '../../Molecules/AddRecipeIngredientsInput/AddRecipeIngredients.jsx';
import { AddRecipeDescriptionInput } from '../../Atoms/AddRecipeDescriptionInput/AddRecipeDescriptionInput.jsx';
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
      <AddRecipeDescriptionInput />
      <CurvedButton greenOrBlack={'black'} type="submit" title={'Add recipe'} />
    </form>
  );
};

export { AddRecipeForm };
