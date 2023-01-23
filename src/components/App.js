import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import UserContext from '../context/UserContext.js';
import Login from './Login.js';
import Register from './Register.js';
import Transactions from './Transactions.js';
import Inputs from './Inputs.js';
import Outputs from './Outputs.js';

export default function App() {
    const [user, setUser] = useState();

    return (
        <UserContext.Provider value = {{user, setUser}}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={ <Login/> } />
                    <Route path='/sign-up' element={ <Register/> } />
                    <Route path='/transactions' element={ <Transactions /> } />
                    <Route path='/transactions/inputs' element={ <Inputs /> } />
                    <Route path='/transactions/outputs' element={ <Outputs /> } />
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    );
}