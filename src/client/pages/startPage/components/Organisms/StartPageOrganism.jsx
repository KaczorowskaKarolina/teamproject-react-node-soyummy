import { Logo } from 'client/components/Atoms/Logo/Logo';
import { StartPageTexts } from 'client/pages/startPage/components/Molecules/Texts/StartPageTexts.jsx';
import { StartPageButtons } from 'client/pages/startPage/components/Molecules/Buttons/StartPageButtons.jsx';
import css from './StartPageOrganism.module.css';

const StartPageOrganism = () => {
  return (
    <div className={css.StartPageOrganism}>
      <Logo />
      <StartPageTexts />
      <StartPageButtons />
    </div>
  );
};

export { StartPageOrganism };
