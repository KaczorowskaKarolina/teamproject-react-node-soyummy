import { Link } from 'react-router-dom';

import css from './HeroSearchForm.module.css';


const HeroSearchForm = ({ value, onChange }) => {
    return (
      <form className={css.formSearch}>
        <div className={css.formSearchLabel}>
          <input
            type="text"
            value={value}
            onChange={e => onChange(e.target.value)}
            placeholder="Beef"
            className={css.formSearchInput}
          ></input>
          <Link className={css.formSearchButton} to="/search">
            Search
          </Link>
        </div>
      </form>
    );
  };
  
  export default HeroSearchForm;
  