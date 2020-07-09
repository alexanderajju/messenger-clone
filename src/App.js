import React, { useState,  useEffect, useRef } from 'react';
import { Input,FormControl } from '@material-ui/core';
import './App.css';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendTwoToneIcon from '@material-ui/icons/SendTwoTone';
import { IconButton } from '@material-ui/core';





function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
  ]);
  const [username, setUsername] = useState('');
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(scrollToBottom, [messages]);
  

  useEffect(() =>{
    db.collection('messages').orderBy('timestamp','asc').onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc =>({id: doc.id,message: doc.data()})))
    });

  }, [] )

  useEffect(() => {
    setUsername(prompt('Please enter your name'));
  }, [] )
  const sendMessage = (event) =>{
    event.preventDefault();

    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    setMessages([...messages, {username: username, message: input}])
    setInput('')
    
    
  }
  return (
    <div className="App chatview-container ">
      <img src="data:image/png;base64,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"/>
     <h1>Hii There</h1>
  <h2>Welcome {username}</h2>

    <form className="app__form" >
    <FormControl className="app__formcontrol">
  <Input className="app__input"  placeholder="Enter a message..." value={input} onChange={event => setInput(event.target.value)}/>
  <IconButton className="app__IconButton" disabled={!input} variant="contained" color="primary" type="submit" onClick={sendMessage} ><SendTwoToneIcon/></IconButton>
    </FormControl>
    </form>
    <FlipMove id="chatview-container" className="messages">
    
    {
      messages.map(({id,message}) => (
        <Message key={id} username={username} message={message}/>
  ))
    }
  
    </FlipMove>
    <div ref={messagesEndRef} />
    </div>
  );
}

export default App;
