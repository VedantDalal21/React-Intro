import React, {useState}  from "react";
import BaceHoc from "../hoc/BaceHoc";

const FunctionalComponents = ({name , age, author, setName}) =>{
    const [count, setCount] = useState(0);
    const [changeName, setChangeName] = useState("");
    const reduceCount = ()=>{
        setCount(count-1)
    }
    return(
        <div>
            <p>This is Functoinsl Components</p>
            <button onClick = {() =>setCount(count+1)}>Click here to increment</button>
            <button onClick = {reduceCount}>Click here to decrement</button>
            <h2>{count}</h2>
            <h4>My father is: {name} it is of {age} years old and my name  is {author}</h4>
            
            {/* <input onChange = {(e)=> console.log(e.target.value)}/> */}

            <input onChange = {(e)=> setChangeName(e.target.value)}/>
            <button onClick = {() => setName(changeName)}>Change name to..</button>
        </div>
    )
}

export default BaceHoc(FunctionalComponents);