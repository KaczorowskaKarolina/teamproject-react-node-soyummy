import css from './IngTitle.module.css';

const IngTitle = ({ ingTitle }) => {
  return <p className={css.IngTitle}>{ingTitle}</p>;
};

export { IngTitle };
