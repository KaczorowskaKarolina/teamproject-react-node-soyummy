import { ReactComponent as StartPageIcon } from 'client/images/pages/startPage/start-page-icon.svg'
import css from './StartPageLogo.module.css'

export const StartPageLogo = () => {
    return (
        <StartPageIcon className={css.StartPageIcon}></StartPageIcon>
    )
}