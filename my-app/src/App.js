import logo from './logo.svg';
import './App.css';
import FolderUpload from './Components/FolderUpload.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <FolderUpload />
      </header>
    </div>
  );
}

export default App;
