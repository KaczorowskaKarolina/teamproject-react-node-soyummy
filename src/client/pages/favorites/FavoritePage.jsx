import css from './FavoritePage.module.css';
import { FavoriteBox } from './components/Orgnisms/FavoriteBox.jsx';
import { useOutletContext } from 'react-router-dom';

const FavoritePage = () => {
  const [setTitle] = useOutletContext();
  setTitle('Favorites');
  return (
    <div className={css.container}>
      <FavoriteBox />
    </div>
  );
};

export { FavoritePage };
