import './App.css';
import TodoList from './components/TodoList';

function App() {
  return (
    <section>
    <h1 style={{textAlign:'center',fontSize:'3rem',marginBottom:'-4rem'}}>To Do App</h1>
    <div className="todo-app">
     <TodoList />
    </div>

    </section>
  );
}

export default App;
