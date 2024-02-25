import css from './NameWithDescription.module.css';
import { Name } from '../../Atoms/Name/Name.jsx';
import { Description } from '../../Atoms/Description/Description.jsx';

const NameWithDescription = () => {
  return (
    <div className={css.box}>
      <Name />
      <Description />
    </div>
  );
};

export { NameWithDescription };
