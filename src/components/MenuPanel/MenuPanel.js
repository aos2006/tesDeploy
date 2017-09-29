import React from 'react';
import Transition from 'react-transition-group/Transition';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Burger from 'components/Burger/Burger';
import { Accordeon, AccordeonItem } from 'components/Accordeon';
import Link from 'components/Link/Link';
import cx from 'classnames';
import s from './MenuPanel.css';

const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
};

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
};

const MenuPanel = ({
  isShow,
  handleToggle,
  handleAccordeonToggle,
  activeAccordeonIndex,
}) => (
  <div className={cx({
    [s.root]: true,
    [s.active]: isShow,
  })}>
    <div className={s.burger}>
      <Burger onClick={handleToggle} show={isShow} />
    </div>
    <Transition in={isShow} timeout={duration}>
      {state => (
        <div
          style={{
            ...defaultStyle,
            ...transitionStyles[state],
          }}
          className={s.drawer}
        >
          <Accordeon
            activeIndex={activeAccordeonIndex}
            handleToggle={() => {}}
            classnames={{
              content: s.accordeon,
              activeContent: s.accordeonActiveContent,
            }}
            onOpen={handleAccordeonToggle}
          >
            <AccordeonItem title="Женские">
              <Link className={s.category}>Dolce gabanna</Link>
              <Link className={s.category}>Loui</Link>
              <Link className={s.category}>Еще что-то</Link>
            </AccordeonItem>
            <AccordeonItem title="Мужские">Contenn</AccordeonItem>
          </Accordeon>
        </div>
      )}
    </Transition>
  </div>
);

export default withStyles(s)(MenuPanel);
