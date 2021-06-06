import GlobalStyle from './globalStyles';
import Todo from './components/Todo';


function App() {



  return (
    <>
      <GlobalStyle />
      <h1 style={{color:'#333'}}>Lista de Atividades</h1>

      <Todo task="Tarefa 1" />
    </>
  );
}

export default App;
