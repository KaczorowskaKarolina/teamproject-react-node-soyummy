import { Link } from 'react-router-dom';

import css from './SearchComponent.module.css';

const SearchComponent = ({ value, onChange }) => {
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

export default SearchComponent;
