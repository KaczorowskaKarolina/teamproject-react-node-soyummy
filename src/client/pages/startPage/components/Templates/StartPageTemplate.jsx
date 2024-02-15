import { StartPageOrganism } from 'client/pages/startPage/components/Organisms/StartPageOrganism';
import css from './StartPageTemplate.module.css';

export const StartPageTemplate = () => {
  return (
    <div className={css.StartPageTemplate}>
      <StartPageOrganism />
    </div>
  );
};
