import React, {useState} from 'react';
import {UserContext} from './UserContext';
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
  const [Value, setValue] = useState('');
  return (
    <UserContext.Provider value={{Value, setValue}}> 
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
          transition={{delay: .5, duration: 4,stiffness: 120}}
        >
          {Value !== 'N/A' && !Value &&<img src={bg} alt="backgroundImage"/>}
        </motion.div>
        {Value && 
          <motion.div 
            initial={{ y: -1000}}
            animate = {{ y: -10}}
            transition={{delay: 0.5, type: 'spring', stiffness: 120}}
            className="pdfFrame">
            <iframe src={Value} title="maps">
            </iframe>
            <div className="switchTab">
              <span>⚠️ Having an issue loading the PDF files ? 
                Click the link below to browse in a separate tab. 
              </span>
              <a href={Value} rel="noreferrer" target="_blank" title="maps_url">
             <span>Browse In Separate Tab</span> 
              </a>
            </div>
          </motion.div> 
        }
        <motion.div  
          initial={{ y: -1000}}
          animate = {{ y: -10}}
          transition={{delay: 0.5, type: 'spring', stiffness: 120}}
          className="chatboot-container">
          <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
          />
        </motion.div>
      </div>

      <div className="footer">
      </div>     
    </motion.div>
    </UserContext.Provider>  
  );
}

export default App;
