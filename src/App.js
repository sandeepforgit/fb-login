import './App.css';
import Facebook from "./components/Facebook";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1 className="AppTitle">Facebook Login Demo</h1>
      </header>
      <p className="AppIntro">Authenticate to get started</p>
      <Facebook />
    </div>
  );
}

export default App;
