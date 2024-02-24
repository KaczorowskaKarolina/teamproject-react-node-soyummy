import { useSelector } from 'react-redux';
import { MainPageTitle } from './Templates/SearchedRecipesList/MainPageTitle/MainPageTitle';
import { SearchBar } from '#pages/searchPage/Organisms/SearchBar/SearchBar.jsx';
import { SearchedRecipesList } from '#pages/searchPage/Templates/SearchedRecipesList/SearchedRecipesList.jsx';

// <MainPageTitle title="Search" need to be add in the code under the Header/>

//Awaiting Header, Footer and MainPageTitle Component

const SearchPage = () => {
  const searchResults = useSelector(state => state.search.recipes);

  return (
    <div>
      <MainPageTitle title="Search" />
      <SearchBar />
      <SearchedRecipesList recipes={searchResults} />
    </div>
  );
};

export { SearchPage };
