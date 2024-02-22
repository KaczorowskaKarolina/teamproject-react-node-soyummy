import { CategoriesPage } from 'client/pages/categories/CategoriesPage.jsx';
import { HomePage } from 'client/pages/home/HomePage.jsx';
import { StartPage } from 'client/pages/startPage/StartPage.jsx';
import { AddRecipeForm } from './Organisms/AddRecipeForm/AddRecipeForm.jsx';

import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from './Templates/SharedLayout/SharedLayout.jsx';

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
        <Route
          path="/teamproject-react-node-soyummy"
          element={<AddRecipeForm />}
        />
        <Route path="/" element={<SharedLayout />}>
          <Route
            path="/categories/:categoryName"
            element={<CategoriesPage />}
          />
          {/* <Route index element={<Home />} /> }

        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/categories/:categoryName" element={<CategoriesPage />} />
        <Route path="/" element={<HomePage />} />
       
        <Route path="/add" element={<AddRecipiesPage />} />
        <Route path="/my" element={<MyRecipiesPage />} />
        <Route path="/favorite" element={<FavoritePage />} />
        <Route path="/shopping-list" element={<ShoppingListPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="*" element={<Page404 />} />  */}
        </Route>
      </Routes>
    </div>
  );
};

export { App };
