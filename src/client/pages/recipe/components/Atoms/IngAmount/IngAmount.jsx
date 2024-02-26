import css from './IngAmount.module.css';

const IngAmount = ({ ingAmount }) => {
  return <p className={css.IngAmount}>{ingAmount}</p>;
};

export { IngAmount };
