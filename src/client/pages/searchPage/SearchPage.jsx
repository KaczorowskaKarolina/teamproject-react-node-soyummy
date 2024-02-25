import { useSelector } from 'react-redux';

import { SearchBar } from '#pages/searchPage/Organisms/SearchBar/SearchBar.jsx';
import { SearchedRecipesList } from '#pages/searchPage/Templates/SearchedRecipesList/SearchedRecipesList.jsx';
// future import {MainPageTitle}
// <MainPageTitle title="Search" need to be add in the code under the Header/>

//Awaiting Header, Footer and MainPageTitle Component

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
