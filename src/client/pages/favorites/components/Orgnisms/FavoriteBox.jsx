import { DeleteButton } from '../Atoms/DeleteButton/DeleteButton.jsx';
import { Image } from '../Atoms/Image/Image.jsx';
import { RecipeButton } from '../Atoms/RecipeButton/RecipeButton.jsx';
import { Time } from '../Atoms/Time/Time.jsx';
import { NameWithDescription } from '../Molecules/NameWithDescription/NameWithDescription.jsx';
import css from './FavoriteBox.module.css';

const FavoriteBox = () => {
  return (
    <div className={css.box}>
      <div className={css.image}>
        <Image />
      </div>
      <div className={css.content}>
        <div className={css.upperContent}>
          <NameWithDescription />
          <DeleteButton />
        </div>
        <div className={css.lowerContent}>
          <Time />
          <RecipeButton />
        </div>
      </div>
    </div>
  );
};

export { FavoriteBox };
