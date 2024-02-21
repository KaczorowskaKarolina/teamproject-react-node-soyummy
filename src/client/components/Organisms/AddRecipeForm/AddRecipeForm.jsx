import styles from './AddRecipeForm.module.css';
import { AddRecipeImage } from '../../Atoms/AddRecipeImage/AddRecipeImage.jsx';
import { AddRecipeInfo } from '../AddRecipeInfo/AddRecipeInfo';
import { AddIngredients } from '../AddIngredients/AddIngredients.jsx';
import { CurvedButton } from '../../Atoms/CurvedButton/CurvedButton.jsx';
import { AddPreparation } from 'client/components/Molecules/AddPreparation/AddPreparation';

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
      <AddIngredients />
      <AddPreparation />
      <CurvedButton greenOrBlack={'black'} type="submit" title={'Add recipe'} />
    </form>
  );
};

export { AddRecipeForm };
