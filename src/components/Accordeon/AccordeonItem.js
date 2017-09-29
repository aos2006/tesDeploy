import React from 'react';
import PropTypes from 'prop-types';
import FontIcon from 'react-toolbox/lib/font_icon';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Arrow from '-!babel-loader!svg-react-loader!./icons/arrow.svg?name=Arrow';
import cx from 'classnames';
import s from './Accordeon.css';

const handleToggle = (index, fn = () => {}) => () => fn(index);

const AccordeonItem = props => (
  <div>
    <header
      className={cx({
        [s.acordeonHeader]: true,
        [s.acordeonActiveHeader]: props.active,
      })}
      onClick={handleToggle(props.itemIndex, props.handleToggle)}
    >
      <Arrow
        className={cx({
          [s.arrow]: true,
          [s.activeArrow]: props.active,
        })}
      />

      {props.title}
    </header>
    <div
      className={cx({
        [s.accordeonContent]: true,
        [s.accordeonActiveContent]: props.active,
        [props.classnames.content]: true,
        [props.classnames.activeContent]: props.active,
      })}
    >
      {props.children}
    </div>
  </div>
);

AccordeonItem.propTypes = {
  active: PropTypes.bool.isRequired,
  itemIndex: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  handleToggle: PropTypes.func.isRequired,
  children: PropTypes.any.isRequired,
};

export default withStyles(s)(AccordeonItem);
