import WastonAssistantData from '../data/WastonAssistantData.json';
import Degrees from './widgets/Degrees';
class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }
  
  // FilterMessage(message) {
  //     if (message) {
      
      
  //       WastonAssistantData.intents.filter((results)=>{
  //         results.examples.some((result)=>{
  //           if(((result.text).toLowerCase()).includes(message.toLowerCase())) {
  //             console.log(results.intent);
  //           }
  //         })
  //         return console.log("hi");
  //       });
     
        
  //     };
  // }


  parse(message) {
    // this.FilterMessage(message);
    
    const greeing = [
      'hello',
      'hi',
      'good morning',
      'good afternoon'
    ];

    const thankyou = [
      'thank you',
      'thanks',
      'ty'
    ];

    const options = [
      'options',
      'help'
    ];

    const degrees = [
      'degrees',
      'What Degrees do BMCC offer',
      'what degrees does'
    ];

    const certifications = [
      'Certificate Program',  
      'Certificate',
      'certifications'
    ];

    const microCredentials = [
      'Micro Credentials'
    ]

    const recognized = greeing.concat(options,certifications, degrees, microCredentials);
        
    if(message) {
      if (greeing.some(text => (text.toLowerCase()).includes(message.toLowerCase()))) {
        return this.actionProvider.handleHello();
      }

      if (thankyou.some(text => (text.toLowerCase()).includes(message.toLowerCase()))) {
        return this.actionProvider.handleThanks();
      }

      if (degrees.some(text => (text.toLowerCase()).includes(message.toLowerCase()))) {
        return this.actionProvider.handleDegrees({ withAvatar: true });
      }

      if (certifications.some(text => (text.toLowerCase()).includes(message.toLowerCase()))) {
        return this.actionProvider.handleCertifications({ withAvatar: true });
      }
      if (microCredentials.some(text => (text.toLowerCase()).includes(message.toLowerCase()))) {
        return this.actionProvider.handlemicroCredentials({ withAvatar: true });
      }

      if (options.some(text => (text.toLowerCase()).includes(message.toLowerCase()))) {
        return this.actionProvider.handleOptions({ withAvatar: true });
      }
    };
   
    if (!recognized.some(text => (text.toLowerCase()).includes(message.toLowerCase())) || !message) {
      this.actionProvider.handleOther();
    }
  }
}


export default MessageParser;