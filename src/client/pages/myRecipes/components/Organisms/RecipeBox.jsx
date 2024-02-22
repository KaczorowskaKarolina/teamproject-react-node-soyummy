import { Image } from '../Atoms/Image/Image';
import { CurvedButton } from 'client/components/Atoms/CurvedButton/CurvedButton.jsx';
import { Time } from '../Atoms/Time/Time';
import { NameWithDescription } from '../Molecules/NameWithDescription/NameWithDescription';
import css from './RecipeBox.module.css';

const RecipeBox = () => {
  return (
    <div className={css.RecipeBox}>
      <Image />
      <div className={css.RecipeData}>
        <NameWithDescription />
        <div className={css.RecipeAddons}>
          <Time />
          <CurvedButton title="See recipe" greenOrBlack="green" recipes="recipes"/>
        </div>
      </div>
    </div>
  );
};

export { RecipeBox };