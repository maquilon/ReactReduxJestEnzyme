import React from 'react';
import Wallet from './Wallet';
import Money from './Money';

const App = () => {
    return (
        <div>
            <h2>Bank Account</h2>
            <hr />
            <Wallet />
            <hr />
            <Money />
        </div>
    )
}

export default App;