import React, { Component } from 'react';
import Wallet from './Wallet';
import Money  from './Money';

class App extends Component {
    render() {
        return(
            <div>
                <h2>Bank Account</h2>
                <hr />
                <Wallet />
                <hr />
                <Money />

            </div>
        )
    }
}

export default App;