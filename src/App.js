import GlobalStyle from './globalStyles';
import Todo from './components/Todo';


function App() {

  const modalVisible = false;

  return (
    <>
      <GlobalStyle />
      <h1 style={{color:'#333'}}>Lista de Atividades</h1>

      <Todo task="Tarefa 1" />
    </>
  );
}

export default App;
