import React, { useState } from "react"
import { Button, Input, Label } from "reactstrap"
import ModalComponent from "./components/ModalComponent"
import "./App.css"

const App = () => {
  const [modal, setModal] = useState(false);
  const [inputText, setInputText] = useState('')
  
  // Sets modal to the opposite of its current state
  const toggle = () => setModal(!modal);
  // Sets input field to an empty string
  const reset = () => setInputText('')
  // Sets inputText to whatever is inputted into the input field
  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  
  return (
    <div className="entire-content">
      <h1>Preparedness Assessment</h1>
      <div className="form">
        <div className="input">
          <Label for="name">Enter your name</Label>
          <Input 
          className="custom-input" 
          value= {inputText} 
          onChange= {handleInputChange}
          />
        </div>
        <div className="button-container">
        <Button className="button" onClick={toggle}>Click Me</Button>
        <Button className="button" onClick={reset}>Reset</Button>
        <ModalComponent modal={modal} toggle={toggle} inputText={inputText} />
        </div>
      </div>
    </div>
  )
}

export default App
