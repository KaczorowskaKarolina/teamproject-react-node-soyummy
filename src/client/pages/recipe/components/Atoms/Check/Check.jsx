import { ReactComponent as CheckIcon } from '#icons/pick.svg';
import css from './Check.module.css';

const Check = () => {
  return (
    <div className={css.CheckBorder}>
      <div className={css.CheckIcon}>
        <CheckIcon />
      </div>
    </div>
  );
};

export { Check };
