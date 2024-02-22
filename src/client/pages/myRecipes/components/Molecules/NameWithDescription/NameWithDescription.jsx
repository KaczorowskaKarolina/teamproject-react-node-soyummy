import css from './NameWithDescription.module.css';
import { Name } from '../../Atoms/Name/Name';
import { Description } from '../../Atoms/Description/Description';
import { DeleteButton } from '../../Atoms/DeleteButton/DeleteButton';

const NameWithDescription = () => {
  return (
    <div className={css.Description}>
        <div className={css.NameWithButton}>
            <Name />
            <DeleteButton />
        </div>
      <Description />
    </div>
  );
};

export { NameWithDescription };