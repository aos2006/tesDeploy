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

class Product extends React.Component {
  static propTypes = {};

  render() {
    return (
      <Grid>
        <Row center="xs">
          <Col xs={12} sm={8} md={12} lg={12}>
            <h1>Product page</h1>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Product;
