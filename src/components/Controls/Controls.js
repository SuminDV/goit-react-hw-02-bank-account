import React from 'react';
import PropTypes from 'prop-types';
import style from './Controls.module.css';

function Controls({ depositOn, withdrawOn, onChange }) {
  return (
    <section className={style.controls}>
      <input
        className={style.controls_input}
        onChange={onChange}
        type="number"
        name="amount"
      />
      <button
        className={style.controls_button}
        onClick={depositOn}
        type="button"
      >
        Deposit
      </button>
      <button
        className={style.controls_button}
        onClick={withdrawOn}
        type="button"
      >
        Withdraw
      </button>
    </section>
  );
}
Controls.propTypes = {
  depositOn: PropTypes.func.isRequired,
  withdrawOn: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default Controls;
