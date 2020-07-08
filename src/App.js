import React, { useState, useEffect } from 'react';
import { Button,InputLabel,Input,FormControl } from '@material-ui/core';
import './App.css';
import Message from './Message';

function App() {
  const [input, setInput] = useState('');
  const [messages, setmessages] = useState([
    {username: 'Aju',text: 'hey there'},
    {username: 'Edger',text: 'hey man'}
  ]);
  const [username, setUsername] = useState('');

  useEffect(() => {
    setUsername(prompt('Please enter your name'));
  },[])
  const sendMessage = (event) =>{
    event.preventDefault();
    setmessages([...messages, {username: username, text: input}])
    setInput('')
    
  }
  return (
    <div className="App">
   
     <h1>Hii There</h1>
  <h2>Welcome {username}</h2>

    <form>
    <FormControl>
  <InputLabel>Enter a message...</InputLabel>
  <Input value={input} onChange={event => setInput(event.target.value)}/>
  <Button disabled={!input} variant="contained" color="primary" type="submit" onClick={sendMessage} >Send Message</Button>
    </FormControl>
    </form>
    

    {
      messages.map(message => (
        <Message username={username} message={message}/>
  ))
    }

    </div>
  );
}

export default App;
