import styled from 'styled-components';
import axios from 'axios';
import {FaSignOutAlt} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import UserContext from '../context/UserContext.js';

export default function Transactions(){
    const navigate = useNavigate();
    const {user} = useContext(UserContext);
    const [transactions, setTransactions] = useState();
    let count = 0;

    useEffect(() => {( 
        async() => {
            try{
                getData();
            }catch(error){
                alert('Erro ao obter transações', error);
            }
        })();
    }, []);

    async function getData() {
        const transactions = await axios.get('http://localhost:5000/home', {
            headers: {Authorization: `Bearer ${user.token}`}
        });
        setTransactions(transactions.data);
    }

    async function exclude(transaction) {
        try {
            const confirmExclude = window.confirm('Tem certeza que deseja apagar essa transação?');
            if (confirmExclude) {
                await axios.delete('http://localhost:5000/home/${transaction._id}', {
                    headers: {Authorization: `Bearer ${user.token}`}
                });
                getData();
            }
        } catch(error) {
            alert(error.response.data);
        }
    }

    return transactions ?(
        <Container>
            <Nav>
                <H1 data-test="user-name" >Olá, {user.name}</H1>
                <Exit data-test="logout" onClick={() => navigate('/')}><FaSignOutAlt /></Exit>
            </Nav>
            <Registers>
                {transactions.length > 0 ? (
                    <Values>
                        {transactions.map(transaction => {
                            const {date, description, value, type} = transaction;
                            const number = parseFloat(value).toFixed(2).replace('.', ',');

                            if(type === 'input'){
                                count += parseFloat(value);
                            } else{
                                count -= parseFloat(value);
                            }

                            return(
                                <List>
                                    <Transac>
                                        <Info>{date}</Info>
                                        <Info1 data-test="registry-name" >{description}</Info1>
                                    </Transac>
                                    <Value data-test="registry-amount" color={type === 'input' ? '#03AC00' : '#C70000'}>{number}</Value>
                                    <Button data-test="registry-delete" onClick={() => exclude(transaction)}>x</Button>
                                </List>
                            );
                        })}
                        <Balance>
                            SALDO
                            <Value data-test="total-amount" color={count > 0 ? '#03AC00' : '#C70000'}>{parseFloat(count).toFixed(2).replace('.', ',')}</Value>
                        </Balance>
                    </Values>
                ) : (
                    <ContainerRegisters><H2>Não há registros de entrada ou saída</H2></ContainerRegisters>
                )}
            </Registers>

            <Footer>
                <Transaction data-test="new-income" onClick={() => navigate('/transactions/inputs')}>
                    <Icon>+</Icon>
                    <P>Nova entrada</P>
                </Transaction>
                <Transaction data-test="new-expense" onClick={() => navigate('/transactions/outputs')}>
                    <Icon> - </Icon>
                    <P>Nova saída</P>
                </Transaction>
            </Footer>
        </Container>
    ) : <p>Carregando</p>;
}

const Container = styled.div`
    heigth: 667px;
    width: 375px;
    background: #8C11BE;
`;

const Nav = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 25px 24px 0 25px;
`;

const H1 = styled.h1`
    font-family: 'Raleway';
    font-weight: 700;
    font-size: 26px;
    line-height: 31px;
    color: #FFFFFF;
`;

const Exit = styled.div`
    font-size: 25px;
    color: #FFFFFF;
        :hover {
            cursor: pointer;
        }
`;

const Registers = styled.div`
    rigth: 25px;
    left: 25px;
    width: 326px;
    height: 446px;
    margin:  22px 25px  0;
    background: #FFFFFF;
    border-radius: 5px;
`;

const ContainerRegisters = styled.div`
    display: flex;
    width: 145px;
    height: 100%;
    align-itens: center;
    justify-content: center;
`;

const H2 = styled.h2`
    width: 180px;
    height: 46px;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    color: #868686;
    font-family: 'Raleway';
`;

const Footer = styled.div`
    padding: 16px 25px;
    bottom: 25px;
    display: flex;
    justify-content: space-between;
`;

const Transaction = styled.div`
    min-width: 155px;
    min-height: 114px;
    border-radius: 5px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: #A328D6;
    :hover {
        cursor: pointer;
    }
`;

const Icon = styled.div`
    width: 22px;
    height: 22px;
    font-size: 22px;
    font-weight: 700;
    border-radius: 50px;
    border: 2px #FFFFFF solid;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;
`;

const P = styled.div`
    width: 64px;
    height: 40px;
    font-weight: 700;
    font-size: 17px;
    line-height: 20px;
    color: #FFFFFF;
    font-family: 'Raleway';
`; 

const Values = styled.div`
    display: flex;
    width: 100%;
    padding: 12px;
    flex-direction: column;
    font-family: 'Raleway';
`;

const List = styled.div`
    display: flex;
    font-size: 18px;
    line-height: 19px;
    align-items: center;
    justify-content: space-between;
`;

const Transac = styled.div`
    display: flex;
    margin: 10px;
`;

const Info = styled.p`
    margin-rigth: 10px;
    color: #C6C6C6;
`;

const Info1 = styled.p`
    color #000000;
`;

const Value = styled.p`
    font-weight: initial;
    color: ${props => props.color};
`;

const Balance = styled.h1`
    display: flex;
    position: absolute;
    width: calc(100% - 35px);
    bottom: 20px;
    font-size: 17px;
    font-weight: 700;
    line-height: 20px;
    margin-left: 10px;
    justify-content: space-between;
`;

const Button = styled.div`
    margin-left: 10px;
    color: #C6C6C6;
    font-family: 'Raleway';
    :hover {
        color: #000000;
        cursor: pointer;
    }
`;