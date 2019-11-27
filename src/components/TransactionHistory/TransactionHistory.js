import React from 'react';
import PropTypes from 'prop-types';
import style from './TransactionHistory.module.css';

function Transaction({ trans }) {
  return (
    <table className={style.transactionContainer}>
      <thead>
        <tr>
          <th>Transaction</th>
          <th>Amount</th>
          <th>Date</th>
        </tr>
      </thead>

      <tbody>
        {trans.map(prop => (
          <tr key={prop.id}>
            <td>{prop.type}</td>
            <td>{prop.amount}</td>
            <td>{prop.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

Transaction.propTypes = {
  trans: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.number,
      date: PropTypes.string,
    }),
  ).isRequired,
};
export default Transaction;
