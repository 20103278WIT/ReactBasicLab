import './App.css';

import Task from './components/Task';

function App() {
  return (
      <div className="container">
      <h1>Testing Lab 1</h1>
      <Task title="Dishes" deadline="Today">
        Empty dishes
    </Task>
    <Task title="Laundry" deadline="Tomorrow">
        Fold laundry and put away
    </Task>
      <Task title="Tidy" deadline="Today">
        Tidy house
    </Task>
    </div>
  );
}


export default App;
