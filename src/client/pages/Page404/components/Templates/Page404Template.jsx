import React from 'react';
import { Page404Texts } from '../Molecules/Texts/Page404Texts.jsx';
import css from './Page404Template.module.css';

const Page404Template = () => {
    return (
        <div className={css.page404_container}>
            {/* <div>
                <img src="../../../../images/pages/Page404/bro_mobile.png" alt="people" className={css.page404_image} />
                </div> */}
            <div className={css.page404_text}>
                <Page404Texts />
            </div>
      </div>
  );
};

export { Page404Template };