/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import cx from 'classnames';
import { PropTypes } from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Navigation.css';
import Link from '../Link';
import Burger from 'components/Burger/Burger';
import HomeIcon from '-!babel-loader!svg-react-loader!./icons/home.svg?name=HomeIcon';
import SearchIcon from '-!babel-loader!svg-react-loader!./icons/search.svg?name=SearchIcon';
import BasketIcon from '-!babel-loader!svg-react-loader!./icons/basket.svg?name=BasketIcon';

class Navigation extends React.Component {
  static contextTypes = {
    location: PropTypes.object.isRequired,
  };
  static defaultProps = {
    classnames: {
      root: '',
    },
    horizontal: false,
  };

  isActivePath = path => this.context.location.path === path;

  render() {
    return (
      <div
        className={cx({
          [s.root]: true,
          [s.horizonatal]: this.props.horizonatal,
          [this.props.classnames.root]: true,
        })}
        role="navigation"
      >
        <Link
          className={`${s.link} ${this.isActivePath('/home')
            ? s.activeLink
            : ''}`}
          to="/home"
        >
          <HomeIcon className={s.icon} />
        </Link>
        <Link
          className={`${s.link} ${this.isActivePath('/basket')
            ? s.activeLink
            : ''}`}
          to="/basket"
        >
          <BasketIcon className={s.icon} />
        </Link>
        <Link
          className={`${s.link} ${this.isActivePath('/search')
            ? s.activeLink
            : ''}`}
          to="/search"
        >
          <SearchIcon className={s.icon} />
        </Link>
        <div className={s.burger}>
          <Burger isStatic {...this.props.burger} />
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Navigation);
