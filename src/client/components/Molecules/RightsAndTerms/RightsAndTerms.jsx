import css from './RightsAndTerms.module.css';
// import { variables } from 'client/styles/_vars.css';

const RightsAndTerms = () => {
  return (
    <div className={css.RightsAndTerms}>
      <p className={css.Rights}>© 2023 All Rights Reserved.</p>
      <a href="www.google.com/" className={css.Terms}>
        Terms of Service
      </a>
    </div>
  );
};

export { RightsAndTerms };
