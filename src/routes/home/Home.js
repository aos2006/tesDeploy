/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { Button } from 'react-toolbox/lib/button';
import BtnStyles from 'react-toolbox/lib/button/theme.css';
import s from './Home.css';

class Home extends React.Component {
  static propTypes = {};

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <Button label="aleshka" />
          <h1 className={s.title}>React.js News</h1>
        </div>
      </div>
    );
  }
}

export default withStyles(s, BtnStyles)(Home);
