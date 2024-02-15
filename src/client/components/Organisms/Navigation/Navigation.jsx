import css from './Navigation.module.css';
import { Navbar } from 'client/components/Molecules/Navbar/Navbar';

export const Navigation = () => {
  return (
    <div className={css.container}>
      <div className={css.icons}></div>
      <Navbar />
    </div>
  );
};
