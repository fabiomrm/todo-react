import { useState } from 'react';

import styled from 'styled-components';
import Button from './Button';
import Modal from './Modal';


const TodoCard = styled.div`
    background-color: #FFF;
    border-radius: 0.3rem;
    box-shadow: 0 0.2rem rgba(0, 0, 0, 0.2);
    padding: 1rem;
    width: 20rem;

    display: flex;
    flex-direction: column;
`; 

const Todo = ({ task }) => {

    const [modalVisible, setModalVisible] = useState(false);


    function deleteTask() {
        alert('DELETAR')
    }

    return (
        <>
        <TodoCard>
            <h2 style={{color:'#333'}}>{task}</h2>
            <Button value="DELETAR" onDelete={() => setModalVisible(!modalVisible)} />
        </TodoCard>
        
        {modalVisible && 
                <Modal 
                    onConfirm={deleteTask}
                    onCancel={() => setModalVisible(!modalVisible)}
                />
        }
        </>
    );
}

export default Todo;