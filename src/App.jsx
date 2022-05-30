// import { useSelector } from 'react-redux';
import './App.css';
import AddTask from './componments/AddTask';
import Filter from './componments/Filter';
import List from './List';
// import Task from './componments/Task';

function App() {
  
  return (
    <div className="App">
      <AddTask/>
      <Filter/>
      <List/>
    </div>
  );
}

export default App;
