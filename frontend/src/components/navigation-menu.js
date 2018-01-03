import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import Divider from 'material-ui/Divider';
import { Link, withRouter } from 'react-router-dom';

import Categories from './categories';

const NavigationMenu = ({location}) => {
  return (
    <Drawer
      docked={true}
      width={200}
      open={true}
      openSecondary={false}
    >
      <AppBar title="Readable" iconStyleLeft={{display: 'none'}} />
      <MenuItem containerElement={<Link to='/' />} 
                primaryText="Home" 
                className={location.pathname === `/` ? 'active-link' : 'inactive'}/>
      <Divider />
      <Categories />
    </Drawer>
)};

export default withRouter(NavigationMenu);