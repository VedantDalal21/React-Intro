import './App.css';
import ClassComponent from './components/ClassComponents';
import FunctionalComponents from './components/FunctionalComponents';
import {useState} from "react";
function App() {
  const author = "Vedant";

  const [name, setName] = useState("Jagannath");
  return (
    <div className="App">
      
      <p>Class Components</p>
      <ClassComponent></ClassComponent>
      <br/>
      <p>Functional Components</p>
      <FunctionalComponents name = {name} age= {54} author = {author} setName = {setName}/> 
      {/* <FunctionalComponents name = 'Reaction' age= {20} author = {author}/> */}
      {/* <FunctionalComponents></FunctionalComponents> */}
    </div>
  );
}

export default App;
