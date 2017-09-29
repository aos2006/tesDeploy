import React from 'react';
import BurgerClose from '-!babel-loader!svg-react-loader!./icons/burger-close.svg?name=BurgerClose';
import BurgerShow from '-!babel-loader!svg-react-loader!./icons/burger-show.svg?name=BurgerShow';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import cx from 'classnames';
import s from './Burger.css';

const Burger = ({ show, onClick, isStatic }) => (
  <div
    className={cx({
      [s.root]: true,
      [s.static]: isStatic,
    })}
    onClick={onClick}
  >
    <span className={s.icon}>
      {show ? (
        <BurgerClose className={s.burger} />
      ) : (
        <BurgerShow className={s.burger} />
      )}
    </span>
  </div>
);
Burger.defaultProps = {
  isStatic: false,
};
export default withStyles(s)(Burger);
