import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login.js';
import Register from './Register.js';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/sign-in'element={ <Login/> } />
                <Route path='/sign-up'element={ <Register/> } />
            </Routes>
        </BrowserRouter>
    );
}