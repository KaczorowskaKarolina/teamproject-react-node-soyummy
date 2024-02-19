import { useSearchParams } from 'react-router-dom';

import HeroSearchForm from 'client/components/Molecules/HeroSearchForm/HeroSearchForm';

import s from './Hero.module.css'

const Hero = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const ingredientName = searchParams.get('name') ?? '';
  
    const updateQueryString = name => {
      const nextParams = name !== '' ? { name } : {};
      setSearchParams(nextParams);
    };
  
    return (
        <div className={s.heroHeader}>
          <h1 className={s.heroHeaderHeading}>
            <span>So</span>Yummy
          </h1>
          <p className={s.heroHeaderDescription}>
            "What to cook?" is not only a recipe app, it is, in fact, your
            cookbook. You can add your own recipes to save them for the future.
          </p>
          <HeroSearchForm value={ingredientName} onChange={updateQueryString} />
        </div>
    );
  };
  
  
  export default Hero;