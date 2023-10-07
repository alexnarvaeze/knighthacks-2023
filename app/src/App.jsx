import { useState } from 'react'
import './css/App.css'
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import {MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator} from "@chatscope/chat-ui-kit-react"

const API_KEY = 'apikey';

function App() {
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      message: "Hello, I am ChatGPT!",
      sender: "ChatGPT"
    }
  ])

  const handleSend = async(message) => {
    const newMessage ={
      message: message,
      sender: "user",
      direction: "outgoing"
    }

    const newMessages = [...messages, newMessage]; //old messages + newmessages

    // update message state
    setMessages(newMessages);
    //set typing indicator
    setTyping(true);
    //process message to chatgpt
    await processMessageToChatGPT(newMessages);

  }

  async function processMessageToChatGPT(chatMessages){
    // chatMessages 
  }
}

export default App
