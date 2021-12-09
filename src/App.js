import './App.css';
import DisplayTodos from './components/ListTask';
import ListTask from './components/AddTask';

function App() {
  return (
    <div className="App">
      <div className='title'> 
        <h1>ToDo List</h1>
      </div>
      <div>
        <DisplayTodos />
        <ListTask />
      </div>
    </div>
  );
}

export default App;