import React from 'react';
import { Grid } from 'react-flexbox-grid';
import s from 'components/grid.css';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

const CGRID = props => <Grid {...props} className={s.container} />;

export default withStyles(s)(CGRID);
