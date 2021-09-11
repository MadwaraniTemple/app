import Header from './Header';
import SideNavBar from './SideNavBar';
import Body from './Body';
import {Fragment, useState} from 'react';
//import classes from './Layout.module.css';

const Layout = (props) => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <Fragment>
        <Header showSidebar={showSidebar}/>
        <SideNavBar sidebar={sidebar} showSidebar={showSidebar}/>
        <Body/>
    </Fragment>
  );
}

export default Layout;
