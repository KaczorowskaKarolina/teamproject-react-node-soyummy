import { Page404Texts } from 'client/pages/Page404/components/Molecules/Page404Texts.jsx';
import css from './StartPageTemplate.module.css';

const Page404Template = () => {
  return (
    <div className={css.Page404Template}>
      {/* <div className={css.BackgroundImageLayer1}></div>
      <div className={css.BackgroundImageLayer2}></div>
      <div className={css.BackgroundImageLayer3}></div> */}
      <div className={css.BackgroundImageLayer4}></div>
      {/* <div className={css.BackgroundImageLayer5}></div>
      <div className={css.BackgroundImageLayer6}></div> */}
      <Page404Texts />
    </div>
  );
};

export { Page404Template };
