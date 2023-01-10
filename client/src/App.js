import './App.css';
import './normal.css';
import { useState } from 'react';
function App() {

  const [input, setInput] = useState("");
  const [chatLog, setChatLog] = useState([]);
  async function handleSubmit(e) {
    e.preventDefault();
    setChatLog([...chatLog, { user: "me", message: `${input}` }])
    setInput("");
  }

  return (
    <div className="App">
      <aside className="sidemenu">
        <div className="side-menu-button">
          <span>+</span>
          Add new chat
        </div>
      </aside>
      <section className="chatbox">
        <div className="chat-log">
          <chatMessage />
          <div className="chat-message minegpt">
            <div className="chat-message-center">
              <div className="avatar minegpt">
                Bot
              </div>
              <div className="message">
                i am an ai
              </div>
            </div>
          </div>
        </div>
        <div className="chat-input-holder">
          <form onSubmit={handleSubmit}>
            <input
              rows="1"
              value={input}
              onChange={() => setInput(input) = e.target.value}
              className="chat-input-textarea">
            </input>
          </form>
        </div>
      </section>

    </div>
  );
}

const chatMessage = ({ message }) => {
  return (
    <div className="chat-message">
      <div className="chat-message-center">
        <div className="avatar">

        </div>
        <div className="message">
          {message.message}
        </div>
      </div>
    </div>
  )
}
export default App;
