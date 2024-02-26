import { Header } from '#organisms/Header/Header.jsx';
import { Outlet } from 'react-router-dom';
import css from './SharedLayout.module.css';
import { useState } from 'react';
import { Navigation } from '#organisms/Navigation/Navigation.jsx';
import { Footer } from '#templates/Footer/Footer.jsx';

const SharedLayout = () => {
  const [menuState, setMenuState] = useState(false);

  if (menuState) {
    return <Navigation closeMenu={setMenuState} />;
  }
  return (
    <div className={css.container}>
      <Header openMenu={setMenuState} />
      <div className={css.titleBox}>
        <h2 className={css.title}>Title</h2>
      </div>
      <Outlet />
      <Footer />
    </div>
  );
};

export { SharedLayout };
