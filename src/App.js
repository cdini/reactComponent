import "./styles.css";
import React, { Component } from 'react';

export default function App() {

  return (
    <div>
      <MyComponent />
    </div>
  );
}


class MyComponent extends Component{

  state = {
    name: 'Bao Nguyen',
    jobs: 'DevC'
  }

   ChangeNameValue = ( event ) => {
    this.setState({
        name: event.target.value
   })
}

    handleClick = () => {
      alert("succes")
    }

  render(){
    return(
      <>
      <div className="Header">
      <input value={this.state.name} type="text" 
        onChange = {( event ) => 
        this.ChangeNameValue( event )}
      />
     My name : {this.state['name']} 
      </div>
      <div className="wrapper">
        <button onClick={ () => this.handleClick() }>Click!</button>
      </div>
      </>
    );
  }
}


