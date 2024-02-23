import { useNavigate, useSearchParams } from 'react-router-dom';
import styles from './HeroSearch.module.css';
//optionally future import { useTheme }? (Dark Theme) and styles below

const HeroSearch = () => {
  //const { theme } = useTheme();
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();
  const valueInput = searchParams.get('query');

  const handleSearchFormInput = query => {
    navigate(`/search?query=${query}`);
  };

  const handleSubmit = () => {
    handleSearchFormInput(valueInput);
  };

  const handleQueryChange = e => {
    const queryValue = e.target.value;
    setSearchParams({ query: queryValue });
    };


  return (
    <div className={styles.containerImage}>
      <div className={styles.divFlex}>
        <div className={styles.soYummy}>
          <span className={styles.so}> So</span>
          <span
            className={styles.yummy}
            //</span>  <span className={`${styles.yummy} ${theme === 'dark' ? s.darkTheme : ''}`}>
          >
            {' '}
            Yummy
          </span>
        </div>
        <div
          className={styles.text}
          //<div className={`${s.text} ${theme === 'dark' ? s.darkTheme : ''}`}>
        >
          {' '}
          "What to cook?" is not only a recipe app, it is, in fact, your
          cookbook. You can add your own recipes to save them for the future.
        </div>
        <form
          onSubmit={handleSubmit}
          className={styles.border}
          //className={`${s.border} ${theme === 'dark' ? s.darkTheme : ''}`}
        >
          <input
            type="text"
            name="query"
            onChange={handleQueryChange}
            className={styles.input}
            // className={`${s.input} ${theme === 'dark' ? s.darkTheme : ''}`}
            placeholder="Write something here"
          ></input>
          <button
            type="submit"
            className={styles.button}
            //className={`${s.button} ${theme === 'dark' ? s.darkTheme : ''}`}
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export { HeroSearch };
