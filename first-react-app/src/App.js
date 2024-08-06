import './App.css';
import ClassComponents from './pages/ClassComponents';
import FunctionalComponents from './pages/FunctionalComponents';
import {useState} from "react";
import {Routes, Route} from 'react-router-dom';
// Hoc
import BaceHoc from './hoc/BaceHoc';

function App() {
  const author = "Vedant";

  const [name, setName] = useState("Jagannath");
  return (
       <Routes>
        <Route path = '/' element = {<BaceHoc><ClassComponents /></BaceHoc>}/>
        <Route path = '/functional-component' element = {<BaceHoc><FunctionalComponents 
        name ={name}
        age ={10}
        author ={author}
        setName ={setName}
        /></BaceHoc>}/>
       </Routes>
  );

    
      
}

export default App;

