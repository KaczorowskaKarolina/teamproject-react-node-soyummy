import { StartPageOrganism } from 'client/components/Organisms/StartPageOrganism/StartPageOrganism';
import css from './StartPageTemplate.module.css';

export const StartPageTemplate = () => {
  return (
    <div className={css.StartPageTemplate}>
      <StartPageOrganism />
    </div>
  );
};
