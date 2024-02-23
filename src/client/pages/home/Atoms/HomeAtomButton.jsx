import css from './HomeAtomButton.module.css';

const HomeAtomButton = ({ handleClick }) => {
  return (
    <button className={css.HomeAtomButton} type="button" onClick={handleClick}>
      See all
    </button>
  );
};

export { HomeAtomButton };
