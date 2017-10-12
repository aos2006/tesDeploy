import React from 'react';
import cx from 'classnames';
import Link from 'components/Link';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './productItem.css';

export const ProductItem = ({ type, src, name, href, classes }) => (
  <Link
    to={href}
    className={cx({
      [s.root]: true,
      [classes.root]: true,
    })}
  >
    <img src={src} alt="" className={s.img} />
    <h3 className={s.name}>{name}</h3>
  </Link>
);

ProductItem.defaultProps = {
  type: 'short',
  src: 'http://lorempixel.com/g/140/140',
  name: 'Red Seat',
  href: '/product/1',
  classess: {
    root: '',
  }
};
export default withStyles(s)(ProductItem);
