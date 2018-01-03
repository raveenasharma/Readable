import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import Subheader from 'material-ui/Subheader';
import MenuItem from 'material-ui/MenuItem';

import { capitalizeFirst } from 'utils/helper';

const Categories = ({ location, categories }) => (
  <div>
    <Subheader>Categories</Subheader>
    {categories.map((category, index) => (       
        <MenuItem key={index} 
          primaryText={capitalizeFirst(category.name)} 
          className={location.pathname === `/categories/${category.name}` ? 'active-link' : 'inactive'}
          containerElement={<Link to={`/categories/${category.name}`} />} />
      )
    )}
  </div>
)

const mapStateToProps = ({ categories }) => ({
  categories
})

export default withRouter(connect(mapStateToProps)(Categories));