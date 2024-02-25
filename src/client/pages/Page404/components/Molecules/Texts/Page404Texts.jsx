import { Page404Title } from 'client/pages/Page404/components/Atoms/Page404Title/Page404Title.jsx';
import { Page404Text } from 'client/pages/Page404/components/Atoms/Page404Text/Page404Text.jsx';
import css from './Page404Texts.module.css';

const Page404Texts = () => {
  return (
    <div className={css.Page404Texts}>
      <Page404Title />
      <Page404Text />
    </div>
  );
};

export { Page404Texts };