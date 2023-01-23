import styled from "styled-components";
import { useState } from "react";
import {useNavigate} from 'react-router-dom'
import axios from "axios";

export default function Register(){
    const navigate = useNavigate();
    const [datas, setDatas] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    async function register(){
        try{
            await axios.post('http://localhost:5000/cadastro', datas);
            alert('Cadastro realizado com sucesso!');
            navigate('/');
        }catch (error){
            alert('Erro ao cadastrar', error);
        }
    }

    return(
        <Container>
            <Logo>MyWallet</Logo>
            <Input data-test="name" placeholder = 'Nome' value={datas.name} onChange={e => setDatas({...datas, name: e.target.value})} />
            <Input data-test="email" placeholder = 'E-mail' value={datas.email} onChange={e => setDatas({...datas, email: e.target.value})} />
            <Input data-test="password" placeholder = 'Senha'value={datas.password} onChange={e => setDatas({...datas, password: e.target.value})} />
            <Input data-test="confirmPassword" placeholder = 'Confirme a senha' value={datas.confirmPassword} onChange={e => setDatas({...datas, confirmPassword: e.target.value})} />
            <Button data-test="sign-up-submit" onClick={register} >Cadastrar</Button>
            <Login onClick={() => navigate('/')} >Já tem uma conta? Entre agora!</Login>
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

const Login = styled.p`
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