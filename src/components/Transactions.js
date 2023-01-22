import styled from 'styled-components';
import {FaSignOutAlt} from 'react-icons/fa';


export default function Transactions(){
    return(
        <Container>
            <Nav>
                <H1>Olá, Fulano</H1>
                <Exit><FaSignOutAlt /></Exit>
            </Nav>
            <Registers>
                <ContainerRegisters><H2>Não há registros de entrada ou saída</H2></ContainerRegisters>
            </Registers>

            <Footer>
                <Transaction>
                    <Icon>+</Icon>
                    <P>Nova entrada</P>
                </Transaction>
                <Transaction>
                    <Icon> - </Icon>
                    <P>Nova saída</P>
                </Transaction>
            </Footer>
        </Container>
    );
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