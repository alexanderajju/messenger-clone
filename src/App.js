import React, { useState } from 'react';
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
    <input value={input} onChange={event => setInput(event.target.value)} />
     <button type="submit" onClick={sendMessage} >Send Message</button>
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
