import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import cx from 'classnames';
import s from './Accordeon.css';

const Accordeon = props => (
  <div className={cx({
    [s.root]: true,
    [props.classnames.root]: true,
  })}>
    {React.Children.map(props.children, (child, index) =>
      React.cloneElement(child, {
        active: index === props.activeIndex,
        handleToggle: props.onOpen,
        itemIndex: index,
        classnames: props.classnames,
      }),
    )}
  </div>
);

Accordeon.propTypes = {
  activeIndex: PropTypes.number.isRequired,
  onOpen: PropTypes.func.isRequired,
  children: PropTypes.any.isRequired,
};


Accordeon.defaultProps = {
  classnames: {
    root: '',
  }
}

export default withStyles(s)(Accordeon);
