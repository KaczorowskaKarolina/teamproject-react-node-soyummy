import css from './FavoritePage.module.css';
import { FavoriteBox } from './components/Orgnisms/FavoriteBox.jsx';

const FavoritePage = () => {
  return (
    <div className={css.container}>
      <FavoriteBox />
    </div>
  );
};

export { FavoritePage };
