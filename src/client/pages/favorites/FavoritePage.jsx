import { DeleteButton } from './components/Atoms/DeleteButton/DeleteButton';
import { Image } from './components/Atoms/Image/Image';
import { RecipeButton } from './components/Atoms/RecipeButton/RecipeButton';
import { Time } from './components/Atoms/Time/Time';
import { NameWithDescription } from './components/Molecules/NameWithDescription/NameWithDescription';

const FavoritePage = () => {
  return (
    <div>
      <Image />
      <DeleteButton />
      <NameWithDescription />
      <Time />
      <RecipeButton />
    </div>
  );
};

export { FavoritePage };
