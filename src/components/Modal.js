import styled from 'styled-components';
import Button from './Button';

const Backdrop = styled.div`
    position: fixed;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.75);
    width: 100%;
    height: 100vh;
    top:0;
    left:0;
`;

const ModalWrapper = styled.div`
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
    border-radius: 6px;
    background-color: white;
    padding: 1rem;
    text-align: center;
    width: 30rem;
    z-index: 10;
    position: fixed;
    top: 20vh;
    left: calc(50% - 15rem);
`; 

const Modal = ({ onConfirm, onCancel }) => {



    return (
        <Backdrop>
            <ModalWrapper>
                <p>Tem certeza?</p>
                <button value="DELETAR" onClick={onConfirm}>DELETAR</button>
                <button value="CANCELAR" onClick={onCancel}>CANCELAR</button>
            </ModalWrapper>
        </Backdrop>
    )
}

export default Modal
