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
import s from './card.css';
import { CardRoot } from '../../modules/Card';

class Card extends React.Component {
  static propTypes = {};

  render() {
    return (
      <div className={s.root}>
        <Grid>
          <Row>
            <Col xs={12} sm={9} md={9} lg={9} smOffset={2}>
              <CardRoot />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default withStyles(s)(Card);
