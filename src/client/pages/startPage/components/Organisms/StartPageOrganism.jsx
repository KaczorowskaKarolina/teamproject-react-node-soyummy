import { Logo } from 'client/components/Atoms/Logo/Logo';
import { StartPageTexts } from 'client/pages/startPage/components/Molecules/Texts/StartPageTexts';
import { StartPageButtons } from 'client/pages/startPage/components/Molecules/Buttons/StartPageButtons';
import css from './StartPageOrganism.module.css';

export const StartPageOrganism = () => {
  return (
    <div className={css.StartPageOrganism}>
      <Logo />
      <StartPageTexts />
      <StartPageButtons />
    </div>
  );
};
