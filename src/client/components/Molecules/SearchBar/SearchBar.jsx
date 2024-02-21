import styles from './SeachBar.module.css';
import { SearchForm } from '../../Atoms/SearchForm/SearchForm';
import { SearchTypeSelector } from '../../Atoms/SearchTypeSelector/SearchTypeSelector';
import { useDispatch } from 'react-redux';
import { searchRecipesByName } from '../../';

export const SearchBar = () => {
  const dispatch = useDispatch();
  const handleSearch = query => {
    dispatch(searchRecipesByName(query));
  };

  return (
    <div className={styles.searchBar}>
      <SearchForm onSearch={handleSearch} />
      <SearchTypeSelector />
    </div>
  );
};
