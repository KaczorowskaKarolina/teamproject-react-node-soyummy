import css from './Image.module.css';

const Image = () => {
  return (
    <div className={css.imageBox}>
      <img className={css.image} src="" alt="" />
    </div>
  );
};

export { Image };
