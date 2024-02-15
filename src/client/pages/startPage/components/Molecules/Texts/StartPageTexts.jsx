import { StartPageTitle } from 'client/pages/startPage/components/Atoms/StartPageTitle/StartPageTitle.jsx';
import { StartPageText } from 'client/pages/startPage/components/Atoms/StartPageText/StartPageText.jsx';
import css from './StartPageTexts.module.css';

const StartPageTexts = () => {
  return (
    <div className={css.StartPageTexts}>
      <StartPageTitle />
      <StartPageText />
    </div>
  );
};

export { StartPageTexts };
