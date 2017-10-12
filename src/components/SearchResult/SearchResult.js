import React from 'react';
import { ProductItem } from 'components/Product';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './searchResult.css';

export const SearchResult = ({ quantity, list }) => (
  <div className={s.root}>
    <h3 className={s.title}>{`${quantity} Searched result`}</h3>
    {list.map(() => <ProductItem classes={{ root: s.itemList }} />)}
  </div>
);

SearchResult.defaultProps = {
  quantity: 0,
  list: [{}, {}],
};
export default withStyles(s)(SearchResult);
