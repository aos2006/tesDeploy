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
import SearchField from 'components/SearchField/SearchField.js';
import SearchResult from 'components/SearchResult/SearchResult';
import { Row, Col, Grid } from 'components/Grid';
import s from './search.css';

class Search extends React.Component {
  static propTypes = {};

  render() {
    return (
      <div className={s.root}>
        <Grid>
          <Row>
            <Col xs={12} sm={9} smOffset={2}>
              <SearchField />
              <SearchResult />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default withStyles(s)(Search);
