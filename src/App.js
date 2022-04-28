import logo from './img/logo.svg';
import bg from './img/bg.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="head">
        <img src={logo} alt="logoImage"/>
        <h1>Information Bot</h1>
      </div>
      <div className="bg">
       <img src={bg} alt="backgroundImage"/>
      </div>
     
    </div>

  );
}

export default App;
