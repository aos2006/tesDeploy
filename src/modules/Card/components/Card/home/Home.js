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
import Button from 'components/Button/Button';
import { Row, Col, Grid } from 'components/Grid';
import s from './Home.css';

class Home extends React.Component {
  static propTypes = {};

  render() {
    return (
      <div className={s.wrapper}>
        <Grid>
          <Row center="xs" className={s.root}>
            <Col xs={12} sm={8} md={12} lg={12}>
              <h1 className={s.title}>Owo</h1>
              <p className={s.descr}>Магазин лучших реплик</p>
              <Button label="Посмотреть все сумки" />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default withStyles(s)(Home);
