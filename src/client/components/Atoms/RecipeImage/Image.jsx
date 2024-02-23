import css from './Image.module.css';

const Image = ({ imageUrl }) => {
  return (
    <div className={css.ImageBox}>
      <img className={css.Image} src={imageUrl} alt="" />
    </div>
  );
};

export { Image };
