import css from './Description.module.css';

const Description = ({ recipeDecs }) => {
  return <p className={css.Description}>{recipeDecs}</p>;
};

export { Description };
