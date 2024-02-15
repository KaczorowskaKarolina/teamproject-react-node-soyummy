import { StartPageLogo } from 'client/components/Atoms/StartPageLogo/StartPageLogo';
import { StartPageTexts } from 'client/components/Molecules/StartPageTexts/StartPageTexts';
import { StartPageButtons } from 'client/components/Molecules/StartPageButtons/StartPageButtons';

import css from './StartPageOrganism.module.css';

export const StartPageOrganism = () => {
  return (
    <div className={css.StartPageOrganism}>
      <StartPageLogo />
      <StartPageTexts />
      <StartPageButtons />
    </div>
  );
};
