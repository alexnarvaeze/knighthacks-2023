import { useState } from "react";
import "./css/App.css";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";

function App() {
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      message:
        "Hello, I'm here to help you improve your LinkedIn Profile. Please provide the URL below.",
      sender: "ChatGPT",
    },
  ]);

  const handleSend = async (message) => {
    const newMessage = {
      message: message,
      sender: "user",
      direction: "outgoing",
    };

    const newMessages = [...messages, newMessage]; //old messages + newmessages

    // update message state
    setMessages(newMessages);
    //set typing indicator
    setTyping(true);
    //process message to chatgpt
    await processMessageToChatGPT(newMessages);
  };

  async function processMessageToChatGPT(chatMessages) {
    // chatMessages {sender: "user" or chatgpt, message: "messsage content"}
    // apiMessages {role: "user" or "assistant", content: "the message content here"}

    let apiMessages = chatMessages.map((messageObject) => {
      let role = "";
      if (messageObject.sender === "ChatGpt") {
        role = "assistant";
      } else {
        role = "user";
      }
      return { role: role, content: messageObject.message };
    });

    // role: "user" -> a message from user, "assistant" -> response from chatgpt
    // "system" -> generally one initial message defining how we want chatgpt to talk

    const systemMessage = {
      role: "system",
      content:
        "Pretend you are shakespeare dropping a diss track on whatever text I send you", //this is where we give it the prompt
    };

    const apiRequestBody = {
      model: "gpt-3.5-turbo",
      messages: [
        systemMessage,
        ...apiMessages, //[message1, message2]
      ],
    };

    await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + import.meta.env.VITE_REACT_APP_API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(apiRequestBody),
    })
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        console.log(data);
        console.log(data.choices[0].message.content);
        setMessages([
          ...chatMessages,
          {
            message: data.choices[0].message.content,
            sender: "ChatGPT",
          },
        ]);
        setTyping(false);
      });
  }
}

var linkedin_data;

function serverRequest() {
  useEffect(() => {
    fetch("http://localhost:5000/to_gpt").then((linkedin_data = req.body));
  }, []);
}

var data = await fetch("http://localhost:5000/to_gpt", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
});
dataStff = await data.json();

var data1 = await fetch("http://localhost:5000/to_gpt", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: dataStff,
});
export async function fetchAndDisplayResponse() {
  // Assuming you have already received a response from the HTTP request
  const responseData = await data1.json();

  // Extract the relevant data from the response, for example, a message
  const messageToChatGPT = responseData.message;

  // Format the data for ChatGPT (assuming you're using OpenAI's ChatGPT API)
  const chatGPTData = {
    messages: [
      {
        role: "system",
        content:
          "Pretend you are shakespeare dropping a diss track on whatever text I send you",
      },
      { role: "user", content: messageToChatGPT },
    ],
  };

  // Send the data to ChatGPT (assuming you have an API key)

  const chatGPTResponse = await fetch(
    "https://api.openai.com/v1/chat/completions",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + import.meta.env.VITE_REACT_APP_API_KEY,
      },
      body: JSON.stringify(chatGPTData),
    }
  );

  const chatGPTResult = await chatGPTResponse.json();
  const chatGPTResponseParagraph = document.getElementById("chatGPTResponse");
  chatGPTResponseParagraph.textContent =
    chatGPTResult.choices[0].message.content; // Display response // Access the response from ChatGPT
}
export default App;
