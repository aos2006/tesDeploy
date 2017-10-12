/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Asside from 'components/Asside/Asside';
import MenuPanel from 'components/MenuPanel/MenuPanel';

// external-global styles must be imported in your JS.
import normalizeCss from 'normalize.css';
import gridCss from 'react-flexbox-grid/dist/react-flexbox-grid.css';
import { Grid } from 'react-flexbox-grid';
import grid from 'components/grid.css';
import s from './Layout.css';

class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  state = {
    isShow: false,
    activeAccordeonIndex: 0,
  };

  handleToggle = () => this.setState({ isShow: !this.state.isShow });
  handleAccordeonToggle = index =>
    this.setState({
      activeAccordeonIndex:
        index === this.state.activeAccordeonIndex ? null : index,
    });
  render() {
    return (
      <div className={s.root}>
        <Asside
          {...this.props}
          burger={{
            onClick: this.handleToggle,
            show: this.state.isShow,
          }}
        />
        {this.props.children}
        <MenuPanel
          handleToggle={this.handleToggle}
          isShow={this.state.isShow}
          activeAccordeonIndex={this.state.activeAccordeonIndex}
          handleAccordeonToggle={this.handleAccordeonToggle}
        />
      </div>
    );
  }
}

export default withStyles(gridCss, normalizeCss, s, grid)(Layout);
