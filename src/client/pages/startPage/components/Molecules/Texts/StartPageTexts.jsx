import { StartPageTitle } from 'client/pages/startPage/components/Atoms/StartPageTitle/StartPageTitle';
import { StartPageText } from 'client/pages/startPage/components/Atoms/StartPageText/StartPageText';
import css from './StartPageTexts.module.css';

export const StartPageTexts = () => {
  return (
    <div className={css.StartPageTexts}>
      <StartPageTitle />
      <StartPageText />
    </div>
  );
};
