import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deposit, withdraw } from '../actions/balance';

// The class has to be exported for testing purposesn
export class Wallet extends Component {
    constructor() {
        super();

        this.state = { balance: undefined };
    }

    deposit = () => this.props.deposit(this.state.balance);
    withdraw = () => this.props.withdraw(this.state.balance);
    updateBalance = event => this.setState({ balance: parseInt(event.target.value, 10) })

    render() {
        return (
            <div>
                <h3 className='balance'>Wallet Balance: {this.props.balance}</h3>
                <br />
                <div className='form-group'>
                    <div className='col-md-3' style={{ paddingLeft: 0 }}>
                        <input
                            className="input-wallet form-control col-md-3"
                            onChange={this.updateBalance}
                        />
                    </div>
                    <div className='col-md-3'>
                        <button
                            className='btn-deposit btn btn-success'
                            onClick={this.deposit}>
                            Deposit
                        </button>

                        <button
                            className='btn-withdraw btn btn-danger'
                            onClick={this.withdraw} >
                            Withdraw
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(state => { return { balance: state.balance } }, { deposit, withdraw })(Wallet);