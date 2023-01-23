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
                    <Route path='/cadastro' element={ <Register/> } />
                    <Route path='/home' element={ <Transactions /> } />
                    <Route path='/home/nova-entrada' element={ <Inputs /> } />
                    <Route path='/home/nova-saida' element={ <Outputs /> } />
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    );
}