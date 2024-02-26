import css from './CategoryAtom.module.css';

const CategoryAtom = ({ title }) => {
  const categoryAddress = `http://localhost:5000/categories/${title}`;

  return (
    <a className={css.CategoryAtom} href={categoryAddress}>
      {title}
    </a>
  );
};

export { CategoryAtom };