import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import cx from 'classnames';
import s from './Multipler.css';

export const Multipler = ({ children, classnames }) => (
  <div
    className={cx({
      [s.root]: true,
      [classnames.root]: true,
    })}
  >
    <span className={s.count}>{children}</span>
    <div className={s.controls}>
      <span
        className={cx({
          [s.arrow]: true,
          [s.up]: true,
        })}
      />

      <span
        className={cx({
          [s.arrow]: true,
          [s.down]: true,
        })}
      />
    </div>
  </div>
);

export default withStyles(s)(Multipler);
