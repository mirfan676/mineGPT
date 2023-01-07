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
