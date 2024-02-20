import css from './NameWithDescription.module.css';
import { Name } from '../../Atoms/Name/Name';
import { Description } from '../../Atoms/Description/Description';

const NameWithDescription = () => {
  return (
    <div className={css.box}>
      <Name />
      <Description />
    </div>
  );
};

export { NameWithDescription };
