import { Page404 } from '#pages/Page404/Page404.jsx';
import { StartPage } from '#pages/startPage/StartPage.jsx';
import { Registration } from '#pages/registration/Registration.jsx';
import { SignIn } from '#pages/signIn/SignIn.jsx';
import { CategoriesPage } from '#pages/categories/CategoriesPage.jsx';

import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from './Templates/SharedLayout/SharedLayout.jsx';
import { FavoritePage } from '#pages/favorites/FavoritePage.jsx';

// several pages imports

const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Routes>
        <Route path="/teamproject-react-node-soyummy" element={<StartPage />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/" element={<SharedLayout />}>
          <Route
            path="/categories/:categoryName"
            element={<CategoriesPage />}
          />
          <Route path="/favorite" element={<FavoritePage />} />
          {/* <Route path="*" element={<Page404 />} /> */}
          {/* <Route index element={<Home />} /> */}
          {/* <Route path="/categories/:categoryName" element={<CategoriesPage />} />
        {/* 
        <Route path="/search" element={<SearchPage />} />
        <Route path="/add" element={<AddRecipiesPage />} />
        <Route path="/my" element={<MyRecipiesPage />} />
        <Route path="/shopping-list" element={<ShoppingListPage />} />
        <Route path="/search" element={<SearchPage />} /> */}

          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </div>
  );
};

export { App };
