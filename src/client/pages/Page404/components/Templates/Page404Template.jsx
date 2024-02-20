import Page404Image from "#images/pages/Page404/bro.png";
import { Page404Texts } from '../Molecules/Texts/Page404Texts.jsx';
import css from './Page404Template.module.css';

const Page404Template = () => {
    return (
        <div className={css.page404_container}>
            <img
                src={Page404Image}
                alt='People trying to connect'
                className={css.page404_image} />
            <div >
                <Page404Texts />
            </div>
        </div>
    );
};

export { Page404Template };