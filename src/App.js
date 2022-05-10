import config from './chatbot/config.js';
import MessageParser from './chatbot/MessageParser.js';
import ActionProvider from './chatbot/ActionProvider.js';
import {Chatbot} from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import logo from './img/logo.svg';
import bg from './img/bg.svg';
import './App.css';
import { motion } from 'framer-motion';

function App() {

  return (
    <motion.div className="app"
    initial={{ opacity: 0}}
    animate = {{ opacity: 1}}
    >
      <div className="navbar">
        <div className="navbar-content">
          <img src={logo} alt="logoImage"/>
          <div className="textBox">
            <h1>Academic Information Bot</h1>
          </div>
          
        </div>
      </div>
      <div className="contents">
        <motion.div className="image-container"
          initial={{ opacity: 0}}
          animate = {{ opacity: 1}}
          transition={{delay: .5, duration: 2}}
        >
          <img src={bg} alt="backgroundImage"/>
        </motion.div>
        <div className="chatboot-container">
          <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
          />
        </div>
      </div>

      <div className="footer">

      </div>
      {/* <motion.div className="head"
        initial={{ y: -250}}
        animate = {{ y: -10}}
        transition={{delay: 0.5, type: 'spring', stiffness: 120}}
      >
       
       
        
      </motion.div> */}
      
    </motion.div>
  );
}

export default App;
