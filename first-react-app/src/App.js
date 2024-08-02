import './App.css';
import ClassComponent from './components/ClassComponents';
import FunctionalComponents from './components/FunctionalComponents';
function App() {
  return (
    <div className="App">
      
      <p>Class Components</p>
      <ClassComponent></ClassComponent>
      <br/>
      <p>Functional Components</p>
      <FunctionalComponents></FunctionalComponents>
    </div>
  );
}

export default App;
