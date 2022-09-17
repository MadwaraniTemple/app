import Header from './Header';
import SideNavBar from './SideNavBar';
import Body from './Body';
import Footer from './Footer';
import React, {Fragment, useState} from 'react';
import i18n from '../../translations/i18n';
import classes from './Layout.module.css';

const Layout = (props) => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const [language, setLanguage] = useState();

    const handleOnclick = ( e ) => {
        e.preventDefault();
        setLanguage(e.target.value);
        i18n.changeLanguage(e.target.value);
    }

  return (
    <Fragment>
        <Header showSidebar={showSidebar}/>
        <SideNavBar sidebar={sidebar} showSidebar={showSidebar} handleOnclick={handleOnclick} language={language}/>
        <Body className={classes.body} />
        <Footer />
    </Fragment>
  );
}

export default Layout;
