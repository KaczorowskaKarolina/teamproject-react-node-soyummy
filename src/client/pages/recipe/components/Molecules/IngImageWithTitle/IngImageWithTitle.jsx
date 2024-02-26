import { IngImage } from '#pages/recipe/components/Atoms/IngImage/IngImage.jsx';
import { IngTitle } from '#pages/recipe/components/Atoms/IngTitle/IngTitle.jsx';
import css from './IngImageWithTitle.module.css';

const IngImageWithTitle = ({ ingImageUrl, ingTitle }) => {
  return (
    <div className={css.IngImageWithTitle}>
      <IngImage ingImageUrl={ingImageUrl} />
      <IngTitle ingTitle={ingTitle} />
    </div>
  );
};

export { IngImageWithTitle };
