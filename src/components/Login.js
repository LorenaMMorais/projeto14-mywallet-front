import styled from 'styled-components';
import axios from 'axios';
import { useState, useContext } from 'react';
import UserContext from '../context/UserContext.js';
import {useNavigate} from 'react-router-dom';


export default function Login() {
    const navigate = useNavigate();
    const {setUser} = useContext(UserContext);
    const [datas, setDatas] = useState ({
        email: '',
        password: ''
    });

    async function login(){
        try{
            await axios.post('http://localhost:5000', datas);
            setUser(datas);
            alert('Sucesso no login');
            navigate('/transactions');
        }catch(error){
            alert(error.response.datas);
        }
    }

    return (
        <Container>
            <Logo>MyWallet</Logo>
            <Input placeholder = 'E-mail' value={datas.email} onChange={e => setDatas({...datas, email: e.target.value})}/>
            <Input placeholder = 'Senha'value={datas.password} onChange={e => setDatas({...datas, password: e.target.value})}/>
            <Button onClick={login} >Entrar</Button>
            <Register onClick={() => navigate('/sign-up')} >Primeira vez? Cadastre-se!</Register>
        </Container>
    );
}

const Container = styled.div`
    width: 375px;
    height: 667px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #8C11BE;
`;

const Logo = styled.h1`
    font-size: 32px;
    line-height: 50px;
    margin-bottom: 25px;
    color: #FFFFFF;
    font-family: 'Saira Stencil One';
`;

const Input = styled.input`
    width: 326px;
    height: 58px;
    padding: 15px;
    margin-bottom: 13px;
    border-radius: 5px;
    border: none;
    background: #FFFFFF;
    box-sizing: border-box;
    ::placeholder {
        font-size: 20px;
        line-height: 23px;
        color: #000000;
        font-family: 'Raleway';
    }
`;

const Button = styled.button`
    width: 326px;
    height: 46px;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    border-radius: 5px;
    text-align: center;
    border: none;
    color: #FFFFFF;
    background: #A328D6;
    font-family: 'Raleway';
    box-sizing: border-box;
    
    :hover {
        cursor: pointer;
    }
`;

const Register = styled.p`
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    margin-top: 36px;
    color: #FFFFFF;
    font-family: 'Raleway';
    
    :hover{
        cursor: pointer;
    }
`; 