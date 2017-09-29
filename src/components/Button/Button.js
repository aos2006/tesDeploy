import React from 'react';
import { Button } from 'react-toolbox';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './blueTheme.css';

export const RButton = props => <Button {...props} theme={s} />;

export default withStyles(s)(RButton);
