import classes from './About.module.css';
import { useTranslation } from "react-i18next";

const HowToReach = (props) => {

    const { t } = useTranslation();

    return <div className={classes.body} id="HowToReach">
        <h1> { t("howToReach.header") } </h1>
        <p> { t("howToReach.para") } </p>

        <h3> { t("howToReach.byRoad.title") } </h3>
        <p> { t("howToReach.byRoad.desc") } </p>

        <h3> { t("howToReach.byTrain.title") } </h3>
        <p> { t("howToReach.byTrain.desc") } </p>

        <h3> { t("howToReach.byAir.title") } </h3>
        <p> { t("howToReach.byAir.desc") } </p>
        
    </div>
        
};

export default HowToReach;