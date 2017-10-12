import React from 'react';
import { Input } from 'react-toolbox';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './SearchField.css';
import Clear from '-!babel-loader!svg-react-loader!./icons/clear.svg?name=Clear';
import theme from './theme.css';

export const SearchField = props => (
  <div>
    <Input
      type="search"
      theme={theme}
      value="Loui Vetton"
      icon={<Clear className={theme.clear} />}
    />
    <span className={s.hint}>Введите продукт который вы хотите найти</span>
  </div>
);

export default withStyles(s, theme)(SearchField);
