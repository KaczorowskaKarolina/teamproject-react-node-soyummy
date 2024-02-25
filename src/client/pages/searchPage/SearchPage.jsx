import { useSelector } from 'react-redux';
import { SearchBar } from '#pages/searchPage/Organisms/SearchBar/SearchBar.jsx';
import { SearchedRecipesList } from '#pages/searchPage/Templates/SearchedRecipesList/SearchedRecipesList.jsx';

const SearchPage = () => {
  const searchResults = useSelector(state => state.search.recipes);

  return (
    <div>
      <SearchBar />
      <SearchedRecipesList recipes={searchResults} />
    </div>
  );
};

export { SearchPage };
