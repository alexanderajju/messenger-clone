import React, { useState } from 'react';
import { Button,InputLabel,Input,FormControl } from '@material-ui/core';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [messages, setmessages] = useState([]);
  console.log(input)
  console.log(messages)

  const sendMessage = (event) =>{
    event.preventDefault();
    setmessages([...messages, input])
    setInput('')
    
  }
  return (
    <div className="App">
   
     <h1>Hii There</h1>

    <form>
    <FormControl>
  <InputLabel>Enter a message...</InputLabel>
  <Input value={input} onChange={event => setInput(event.target.value)}/>
  <Button disabled={!input} variant="contained" color="primary" type="submit" onClick={sendMessage} >Send Message</Button>
    </FormControl>
    </form>
    

    {
      messages.map(message => (
      <p>{message}</p>
      ))
    }

    </div>
  );
}

export default App;
