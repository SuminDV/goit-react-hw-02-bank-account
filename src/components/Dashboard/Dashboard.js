import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import uuid from 'uuid';
import Controls from '../Controls/Controls';
import Balance from '../Balance/Balance';
import Transaction from '../TransactionHistory/TransactionHistory';

const notifyA = () =>
  toast('На счету недостаточно средств для проведения операции!', {
    containerId: 'A',
  });
const notifyB = () =>
  toast('Введите сумму для проведения операции!', { containerId: 'B' });

class Dashboard extends Component {
  state = { amount: 0, balance: 0, deposit: 0, withdrow: 0, transactions: [] };

  onChange = e => {
    this.setState({ amount: +e.target.value });
  };

  withdrawOn = () => {
    if (+this.state.amount <= +this.state.balance) {
      this.setState(state => ({
        balance: state.balance - state.amount,
      }));
      this.setState(state => ({
        withdrow: state.withdrow + state.amount,
      }));
      this.addTransation('WITHDRAW');
    } else {
      notifyA();
    }
  };

  depositOn = () => {
    if (this.state.amount > 0) {
      this.setState(state => ({
        balance: state.balance + state.amount,
      }));
      this.setState(state => ({
        deposit: state.deposit + state.amount,
      }));

      this.addTransation('DEPOSIT');
    } else {
      notifyB();
    }
  };

  addTransation = type => {
    const transAction = {
      id: uuid(),
      type,
      amount: this.state.amount,
      date: new Date().toLocaleDateString() + new Date().toLocaleTimeString(),
    };
    this.setState(state => ({
      transactions: [...state.transactions, transAction],
    }));
  };

  render() {
    const { balance, transactions } = this.state;

    const deposit = transactions.reduce(
      (acc, item) => (item.type === 'deposit' ? acc + item.amount : acc),
      0,
    );

    const withdrow = transactions.reduce(
      (acc, item) => (item.type === 'withdraw' ? acc + item.amount : acc),
      0,
    );

    return (
      <div className="Reader">
        <ToastContainer />
        <Controls
          withdrawOn={this.withdrawOn}
          depositOn={this.depositOn}
          onChange={this.onChange}
        />
        <Balance deposit={deposit} balance={balance} withdrow={withdrow} />
        <Transaction trans={transactions} />
      </div>
    );
  }
}

export default Dashboard;
