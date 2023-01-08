import './App.css';
import './normal.css';

function App() {
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
          <div className="chat-message">
            <div className="chat-message-center">
              <div className="avatar">

              </div>
              <div className="message">
                Hello there
              </div>
            </div>
          </div>
          <div className="chat-message minegpt">
            <div className="chat-message-center">
              <div className="avatar minegpt">
                <svg
                  width={40}
                  height={40}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.5 11a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0ZM16.5 11a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0ZM10 15.5a.5.5 0 0 1 .5.5v.003l.003.01c.004.009.014.027.036.053a.86.86 0 0 0 .27.194c.28.14.7.24 1.191.24.492 0 .912-.1 1.19-.24a.86.86 0 0 0 .271-.194.214.214 0 0 0 .039-.063V16a.5.5 0 0 1 1 0c0 .568-.447.947-.862 1.154-.445.223-1.025.346-1.638.346s-1.193-.123-1.638-.346C9.947 16.947 9.5 16.568 9.5 16a.5.5 0 0 1 .5-.5Z"
                    fill="#47495F"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16 5.5v2H8v-2a.5.5 0 0 0-1 0v2H6A2.5 2.5 0 0 0 3.5 10v7A2.5 2.5 0 0 0 6 19.5h12a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 18 7.5h-1v-2a.5.5 0 0 0-1 0Zm-10 3A1.5 1.5 0 0 0 4.5 10v7A1.5 1.5 0 0 0 6 18.5h12a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 18 8.5H6Z"
                    fill="#47495F"
                  />
                </svg>
              </div>
              <div className="message">
                i am an ai
              </div>
            </div>
          </div>
        </div>
        <div className="chat-input-holder">
          <textArea className="chat-input-textarea"
            rows="1" >
          </textArea>
        </div>
      </section>

    </div>
  );
}

export default App;
