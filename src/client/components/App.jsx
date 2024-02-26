import { Page404 } from '#pages/Page404/Page404.jsx';
import { StartPage } from '#pages/startPage/StartPage.jsx';
import { Registration } from '#pages/registration/Registration.jsx';
import { SignIn } from '#pages/signIn/SignIn.jsx';
import { CategoriesPage } from 'client/pages/categories/CategoriesPage.jsx';
// import { StartPage } from 'client/pages/startPage/StartPage.jsx';
import { ShoppingListPage } from 'client/pages/shoppingList/ShoppingListPage.jsx';

import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from './Templates/SharedLayout/SharedLayout.jsx';
import { Recipe } from 'client/pages/recipe/Recipe.jsx';
// import { Recipe } from '#pages/recipe/Recipe.jsx';

// several pages imports

const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Routes>
        <Route path="/teamproject-react-node-soyummy" element={<StartPage />} />
        <Route path="/" element={<SharedLayout />}>
          <Route path="/categories" element={<CategoriesPage />} />
          <Route
            path="/categories/:categoryName"
            element={<CategoriesPage />}
          />

          {/* <Route path="/search" element={<SearchPage />} />
        <Route path="/add" element={<AddRecipiesPage />} />
        <Route path="/my" element={<MyRecipiesPage />} />
        <Route path="/favorite" element={<FavoritePage />} />
        <Route path="/shopping-list" element={<ShoppingListPage />} />
        <Route path="/search" element={<SearchPage />} /> */}

          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </div>
  );
};

export { App };
