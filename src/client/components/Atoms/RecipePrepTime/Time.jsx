import css from './Time.module.css';

const Time = ({ recipePrepTime }) => {
  return <p className={css.Time}>{recipePrepTime}</p>;
};

export { Time };
