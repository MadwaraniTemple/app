import classes from './About.module.css';
import { useTranslation } from "react-i18next";

const Attractions = (props) => {

    const { t } = useTranslation();

    return <div className={classes.body} id="Attractions">
        <h1> { t("attractions.header") } </h1>
        <p> { t("attractions.para") } </p>

        <h3>{ t("attractions.mainTemple.title") }</h3>
        <h5> { t("attractions.mainTemple.place") } </h5>
        <p> { t("attractions.mainTemple.para") } </p>

        <h3>{ t("attractions.otherTemples.title") }</h3>
        <h5> { t("attractions.otherTemples.place") } </h5>
        <p> { t("attractions.otherTemples.para") } </p>

        <h3>{ t("attractions.hanumanTemple.title") }</h3>
        <h5> { t("attractions.hanumanTemple.place") } </h5>
        <p> { t("attractions.hanumanTemple.para") } </p>

        <h3>{ t("attractions.madwaraniTempleDownhill.title") }</h3>
        <h5> { t("attractions.madwaraniTempleDownhill.place") } </h5>
        <p> { t("attractions.madwaraniTempleDownhill.para") } </p>

        <h3>{ t("attractions.picnicSpots.title") }</h3>
        <h5> { t("attractions.picnicSpots.place") } </h5>
        <p> { t("attractions.picnicSpots.para") } </p>

    </div>
        
};

export default Attractions;