import React from 'react';
import PropTypes from 'prop-types';
import style from '../Dashboard/Dashboard.module.css';

function Balance({ deposit, balance, withdrow }) {
  return (
    <section className={style.balanceContainer}>
      <span>
        <span className={style.span1} role="img" aria-label="top">
          &#8593;
        </span>
        {deposit}$
      </span>
      <span>
        <span className={style.span2} role="img" aria-label="down">
          &darr;
        </span>
        {withdrow}$
      </span>
      <span>Balance: {balance}$</span>
    </section>
  );
}
Balance.propTypes = {
  deposit: PropTypes.number.isRequired,
  balance: PropTypes.number.isRequired,
  withdrow: PropTypes.number.isRequired,
};

export default Balance;
