




export const SearchPage = () => {
    const searchResults = useSelector(state => state.search.recipes);
  
    return (
      <div>
        <Header />
      
        <SearchBar />
        <SearchedRecipesList recipes={searchResults} />
        <Footer />
      </div>
    );
  };
  