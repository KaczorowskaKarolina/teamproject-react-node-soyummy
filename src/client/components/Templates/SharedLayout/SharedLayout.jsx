import { Header } from '#organisms/Header/Header.jsx';
import { Outlet } from 'react-router-dom';
import css from './SharedLayout.module.css';
import { useState } from 'react';
import { Navigation } from '#organisms/Navigation/Navigation.jsx';
import { Footer } from '#templates/Footer/Footer.jsx';

const SharedLayout = () => {
  const [menuState, setMenuState] = useState(false);
  const [title, setTitle] = useState('');

  if (menuState) {
    return <Navigation closeMenu={setMenuState} />;
  }
  return (
    <div className={css.container}>
      <Header openMenu={setMenuState} />
      <div className={css.titleBox}>
        <h2 className={css.title}>{title}</h2>
      </div>
      <Outlet context={[setTitle]} />
      <Footer />
    </div>
  );
};

export { SharedLayout };
