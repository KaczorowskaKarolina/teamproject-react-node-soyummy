import { StartPageTitle } from 'client/components/Atoms/StartPageTitle/StartPageTitle';
import { StartPageText } from 'client/components/Atoms/StartPageText/StartPageText';
import css from './StartPageTexts.module.css';

export const StartPageTexts = () => {
    return (
        <div className={css.StartPageTexts}>
            <StartPageTitle></StartPageTitle>
            <StartPageText></StartPageText>
        </div>
    )
}