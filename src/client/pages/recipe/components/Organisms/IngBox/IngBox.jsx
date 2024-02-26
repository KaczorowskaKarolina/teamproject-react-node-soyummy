import { IngImageWithTitle } from '#pages/recipe/components/Molecules/IngImageWithTitle/IngImageWithTitle';
import { IngAmount } from '#pages/recipe/components/Atoms/IngAmount/IngAmount';
import { Check } from '#pages/recipe/components/Atoms/Check/Check';
import css from './IngBox.module.css';

const IngBox = ({ ingImageUrl, ingTitle, ingAmount }) => {
  return (
    <div className={css.IngBox}>
      <div className={css.IngBoxElement}>
        <IngImageWithTitle ingImageUrl={ingImageUrl} ingTitle={ingTitle} />
      </div>
      <div className={css.IngBoxElement}>
        <IngAmount ingAmount={ingAmount} />
      </div>
      <div className={css.IngBoxElement}>
        <Check />
      </div>
    </div>
  );
};

export { IngBox };
