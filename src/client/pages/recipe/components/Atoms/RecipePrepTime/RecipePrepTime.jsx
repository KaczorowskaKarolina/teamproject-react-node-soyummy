import { ReactComponent as ClockIcon } from '#icons/clock.svg';
import css from './RecipePrepTime.module.css';

const RecipePrepTime = ({ recipePrepTime }) => {
  return (
    <div className={css.RecipePrepTime}>
      <div className={css.PrepTimeIcon}>
        <ClockIcon />
      </div>
      <p className={css.PrepTimeText}>
        {recipePrepTime}
        {' min'}
      </p>
    </div>
  );
};
export { RecipePrepTime };
