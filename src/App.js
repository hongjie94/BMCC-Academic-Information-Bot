import logo from './img/logo.svg';
import bg from './img/bg.svg';
import './App.css';
import { motion } from 'framer-motion';
function App() {
  return (
    <motion.div className="App"
    initial={{ opacity: 0}}
    animate = {{ opacity: 1}}
    >
      <motion.div className="head"
        initial={{ y: -250}}
        animate = {{ y: -10}}
        transition={{delay: 0.5, type: 'spring', stiffness: 120}}
      >
        <img src={logo} alt="logoImage"/>
        <h1>Information Bot</h1>
        
      </motion.div>
      <motion.div className="bg"
        initial={{ opacity: 0}}
        animate = {{ opacity: 1}}
        transition={{delay: .5, duration: 2}}
      >
       <img src={bg} alt="backgroundImage"/>
      </motion.div>
    </motion.div>

  );
}

export default App;
