import MajorDatas from '../data/MajorDatas.json';

class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }
  
  parse(message) {
    
    const lowerCaseMessage = message.toLowerCase();

    const greeing = [
      'hello',
      'hi'
    ];

    const thankyou = [
      'i appreciate it',
      'ok thank you',
      'thank you so much',
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
      'majors',
      'What Degrees do BMCC offer',
      'what degree does bmcc offered',
      'what kind of degrees are offered at BMCC',
      'what degrees does'
    ];

    const certifications = [
      'Certificate Program',  
      'Certificate',
      'certifications'
    ];

    const microCredentials = [
      'Micro Credentials',
      'Micro-Credentials'
    ];

    const majorTitles = MajorDatas.map((data)=> {
      return data.title;
    });

    const recognized = greeing.concat(options,certifications, degrees, microCredentials, majorTitles, thankyou);
        
    if(message) {
     
      if (greeing.some(text => (text.toLowerCase()).includes(lowerCaseMessage))) {
        return this.actionProvider.handleHello();
      }

      if (thankyou.some(text => (text.toLowerCase()).includes(lowerCaseMessage)) && message) {
        return this.actionProvider.handleThanks();
      }

      if (degrees.some(text => (text.toLowerCase()).includes(lowerCaseMessage))) {
        return this.actionProvider.handleDegrees();
      }

      if (certifications.some(text => (text.toLowerCase()).includes(lowerCaseMessage))) {
        return this.actionProvider.handleCertifications();
      }

      if (microCredentials.some(text => (text.toLowerCase()).includes(lowerCaseMessage))) {
        return this.actionProvider.handleMicroCredentials();
      }

      if (majorTitles.some(text =>(text.toLowerCase()).includes(lowerCaseMessage) && message !== 'no'
      )) {
        const result = majorTitles.filter(text =>(text.toLowerCase()).includes(lowerCaseMessage));
        return this.actionProvider.handleMajors(result);
      }

      if (options.some(text => (text.toLowerCase()).includes(lowerCaseMessage))) {
        return this.actionProvider.handleOptions();
      }
    };
   
    if (!recognized.some(text => (text.toLowerCase()).includes(lowerCaseMessage)) || !message || message === 'no') {
      this.actionProvider.handleOther();
    }
  }
}


export default MessageParser;