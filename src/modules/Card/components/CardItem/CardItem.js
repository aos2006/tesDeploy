import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Multipler from '../Multipler/Multipler';
import DeleteItem from '-!babel-loader!svg-react-loader!./icons/delete.svg?name=DeleteItem';
import cx from 'classnames';
import s from './cardItem.css';

export const CardItem = ({ name, count, price, category, classnames }) => (
  <div
    className={cx({
      [s.root]: true,
      [classnames.root]: true,
    })}
  >
    <img src="http://lorempixel.com/g/165/165/" alt="" className={s.img} />
    <div className={s.inner}>
      <header className={s.header}>
        <span className={s.category}>Living room</span>
        <span className={s.name}>White Seat</span>
      </header>
      <footer className={s.footer}>
        <Multipler
          classnames={{
            root: s.multipler,
          }}
        >
          1
        </Multipler>
        <span className={s.price}>$24 004049</span>
      </footer>
    </div>
    <div className={s.clear}>
      <DeleteItem className={s.delete} />
    </div>
  </div>
);

export default withStyles(s)(CardItem);
