import { Header } from 'client/components/Organisms/Header/Header';
import { Outlet } from 'react-router-dom';
import css from './SharedLayout.module.css';

const SharedLayout = () => {
  return (
    <div className={css.container}>
      <Header />
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
};

export { SharedLayout };
