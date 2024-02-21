import { Page404 } from 'client/pages/Page404/Page404.jsx';
import { StartPage } from 'client/pages/startPage/StartPage.jsx';

import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from './Templates/SharedLayout/SharedLayout.jsx';

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
        <Route path="/" element={<SharedLayout />}>
          {/* <Route index element={<Home />} /> */}
          {/* 
        <Route path="/categories/:categoryName" element={<CategoriesPage />} />
        <Route path="/add" element={<AddRecipiesPage />} />
        <Route path="/my" element={<MyRecipiesPage />} />
        <Route path="/favorite" element={<FavoritePage />} />
        <Route path="/shopping-list" element={<ShoppingListPage />} />
        <Route path="/search" element={<SearchPage />} />
        */}
        <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </div>
  );
};

export { App };
