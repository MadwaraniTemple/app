import classes from './SideNavBar.module.css';
import NavButton from '../UI/NavButton';
import { useTranslation } from "react-i18next";
import { AiOutlineClose } from "react-icons/ai";


const SideNavBar = (props) => {

    const { t } = useTranslation();
    
    return <div className={props.sidebar ? classes.sideNavBarActive : classes.sideNavBar}>
        <AiOutlineClose onClick={() => props.showSidebar()}/>
        <NavButton title={ t("navLinks.navLink_1") } navLink="About"/>
        <NavButton title={ t("navLinks.navLink_2") } navLink="Schedules"/>
        <NavButton title={ t("navLinks.navLink_3") } navLink="Attractions"/>
        <NavButton title={ t("navLinks.navLink_4") } navLink="HowToReach"/>
        <NavButton title={ t("navLinks.navLink_5") } navLink="JyotiKalash"/>
        <NavButton title={ t("navLinks.navLink_6") } navLink="Association"/>
        <NavButton title={ t("navLinks.navLink_7") } navLink="Gallery"/>
        <NavButton title={ t("navLinks.navLink_8") } navLink="Contacts"/>
    </div>
};

export default SideNavBar;