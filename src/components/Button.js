import styled from 'styled-components';



const MainButton = styled.button`
    font:inherit;
    padding: 0.5rem 1.5rem;
    cursor: pointer;
    border-radius: 0.3rem;
    background-color: #800040;
    color: white;
    border: 1px solid #800040;
    margin: 0 1rem;

    &:hover{
        background-color:#9C1458;
        border-color:#9C1458;
    }
`;


const Button = ({ value, onDelete }) => {
    return (
        <>
            <MainButton onClick={onDelete}>
                {value}
            </MainButton>
        </>
    )
}

export default Button;