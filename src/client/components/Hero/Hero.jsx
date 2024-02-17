import { useSearchParams } from 'react-router-dom';
import SearchComponent from '../../components/SearchComponent/SearchComponent';
import s from './Hero.module.css.module.css';

const Hero = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const ingredientName = searchParams.get('name') ?? '';

  const updateQueryString = name => {
    const nextParams = name !== '' ? { name } : {};
    setSearchParams(nextParams);
  };

  return (
    <div className={s.main}>
      <div className={s.heroHeader}>
        <h1 className={s.heroHeaderHeading}>
          <span>So</span>Yummy
        </h1>
        <p className={s.heroHeaderDescription}>
          "What to cook?" is not only a recipe app, it is, in fact, your
          cookbook. You can add your own recipes to save them for the future.
        </p>
        <SearchComponent value={ingredientName} onChange={updateQueryString} />
      </div>
    </div>
  );
};


export default Hero;