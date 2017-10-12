import React from 'react';
import CardItem from '../CardItem/CardItem';
import Button from 'components/Button/Button';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import s from './card.css';

export const Card = props => (
  <div>
    <h3 className={s.title}>Корзина</h3>
    <CardItem
      count={1}
      classnames={{
        root: s.item,
      }}
    />
    <CardItem
      count={1}
      classnames={{
        root: s.item,
      }}
    />
    <footer className={s.footer}>
      <span className={s.label}>Сумма</span>
      <span className={s.total}>2400</span>
    </footer>
    <div className={s.submit}>
      <Button label="Оформить закза" />
    </div>
  </div>
);

export default withStyles(s)(Card);
