import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Asside.css';
import Navigation from 'components/Navigation/Navigation';

const Asside = props => (
  <div className={s.root}>
    <ul className={s.categories}>
      <Navigation 
        {...props}
      />
    </ul>
  </div>
);

export default withStyles(s)(Asside);
