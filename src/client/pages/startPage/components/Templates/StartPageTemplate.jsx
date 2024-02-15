import { StartPageOrganism } from 'client/pages/startPage/components/Organisms/StartPageOrganism.jsx';
import css from './StartPageTemplate.module.css';

const StartPageTemplate = () => {
  return (
    <div className={css.StartPageTemplate}>
      <StartPageOrganism />
    </div>
  );
};

export { StartPageTemplate };
