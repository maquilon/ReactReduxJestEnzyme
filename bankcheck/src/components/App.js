import React from 'react';
import Wallet from './Wallet';
import Money from './Money';

const App = () => {
    return (
        <div>
            <h2 className='title'>Bank Account</h2>
            <hr />
            <Wallet />

            <Money />
        </div>
    )
}

export default App;