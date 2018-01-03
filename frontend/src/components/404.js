import React from 'react';
import FontIcon from 'material-ui/FontIcon';

const NotFound = () => (
    <div className="error-container">
        <FontIcon className="material-icons warning-icon" color={'red'}>warning</FontIcon> Oops! Post not found
    </div>
)

export default NotFound;