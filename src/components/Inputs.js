import styled from "styled-components";
import axios from "axios";
import { useState, useContext } from "react";
import UserContext from '../context/UserContext.js';
import { useNavigate } from "react-router-dom";

export default function Inputs(){
    const navigate = useNavigate();
    const {user} = useContext(UserContext);
    const [datas, setDatas] = useState({
        value: '',
        description: ''
    });
    async function save(){
        try{
            await axios.post('http://localhost:5000/home/nova-entrada', datas, {
                headers: {Authorization: `Bearer ${user.token}`}
            });
            alert('Transação concluída');
            navigate('/home');
        }catch(error){
            alert(error);
        }
    }

    return(
        <Container>
            <H1>Nova entrada</H1>
            <Input data-test="registry-amount-input" placeholder = 'Valor' value = {datas.value} onChange = {e => setDatas({...datas, value: e.target.value})}/>
            <Input data-test="registry-name-input" placeholder = 'Descrição' value = {datas.description} onChange = {e => setDatas({...datas, description: e.target.value})}/>
            <Button data-test="registry-save" onClick = {save}>Salvar entrada</Button>
        </Container>
    )
}

const Container = styled.div`
    height: 667px;
    width: 375px;
    padding: 35px;
    display: flex;
    flex-direction: column;
    background: #8C11BE;
`;

const H1 = styled.h1`
    font-size: 26px;
    line-height: 31px;
    font-weight: 700;
    margin-bottom: 40px;
    color: #FFFFFF;
    font-family: 'Raleway';
`;

const Input = styled.input`
    width: 100%;
    height: 58px;
    padding: 15px;
    font-size: 20px;
    margin-bottom: 13px;
    border-radius: 5px;
    border: none;
    background: #FFFFFF;
    font-family: 'Raleway';
    ::placeholder {
        font-size: 20px;
        line-height: 23px;
        color: #000000;
        font-family: 'Raleway';
    }
`;

const Button = styled.button`
    width: 100%;
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
    :hover {
        cursor: pointer;
    }
`;
