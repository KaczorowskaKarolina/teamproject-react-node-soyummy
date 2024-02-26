import css from './IngImage.module.css';

const IngImage = ({ ingImageUrl }) => {
  return (
    <div className={css.IngImage}>
      <img src={ingImageUrl} alt="" />
    </div>
  );
};
export { IngImage };
