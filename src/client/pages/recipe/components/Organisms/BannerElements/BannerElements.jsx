import { TitleWithDescription } from "../../Molecules/TitleWithDesc/TitleWithDesc";
import { CurvedButton } from "client/components/Atoms/CurvedButton/CurvedButton";
import { RecipePrepTime } from "../../Atoms/RecipePrepTime/RecipePrepTime";

import css from './BannerElements.module.css'

const BannerElements = ( {recipeName, recipeDesc, recipePrepTime} ) => {
    return (
        <div className={css.BannerElements}>
            <TitleWithDescription recipeName={recipeName} recipeDesc={recipeDesc} />
            <CurvedButton title="Add to favorite recipes" />
            <RecipePrepTime recipePrepTime={recipePrepTime}/>
        </div>
    )
}

export {BannerElements}