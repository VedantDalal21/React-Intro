import React from 'react';
import BaceHoc from '../hoc/BaceHoc';

class ClassComponent extends React.Component{
  constructor(props){
    super(props)

    this.state={
      name: "Vedant",
      age: 20
    }
  }
        render(){
            return (
              <>
                   <p>This is Class Components</p>
              </>
              );
        }
}

export default BaceHoc(ClassComponent);