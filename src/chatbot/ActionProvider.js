
class ActionProvider {
  constructor(createChatBotMessage, setStateFunc, createClientMessage) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }
  
  addMessageToState = (message, message2) => {
    if(message2) {
      this.setState((state) => ({
        ...state,
        messages: [...state.messages, message,message2]
      }));
    } 
    else {
      this.setState((state) => ({
        ...state,
        messages: [...state.messages, message]
      }));
    }
  };

  addNameToState = (name)=> {
    this.setState((state) => ({
      ...state,
      name: name
       }));
  }

  addMajorNameToState =(name)=>{
    
    this.setState(state =>({...state, name:name}))
  };

  handleOptions = () => {
    const message = this.createChatBotMessage(
      "How can I help you? Below are some possible options.",
      {
        widget: "overview",
        loading: true,
        terminateLoading: true
      }
    );
    this.addMessageToState(message);
  };

  handleHello(){
    const message = this.createChatBotMessage('Hello. Nice to meet you.');
    this.addMessageToState(message);
  };

  handleThanks(){
    const response = [
      "You're welcome, i am happy to be able to assist you!",
      "You're welcome, it’s my pleasure to assist you!"
    ];
    const random = Math.floor(Math.random() * response.length);
    const message = this.createChatBotMessage(response[random]);

    this.addMessageToState(message);
    
  };

  handleDegrees(){
    const message = this.createChatBotMessage(
      "BMCC offers an Associate in Arts, Associates in Science, and Associate in Applied Science. BMCC also offers Certification Programs and Micro-Credentials.");
    const message2 = this.createChatBotMessage(
      "Which option were you interested in ?",
      {
        widget: "Degrees",
        loading: true,
        terminateLoading: true,
        delay: 2000
      }
    );
    this.addMessageToState(message, message2);
  };

  handleAASdegrees(){
    const message = this.createChatBotMessage(
     "Currently BMCC offers 9 Majors in Applied Science.The programs offered under the Associate in Applied Science Degree (A.A.S.) are:",
      {
        widget: "AASdegrees",
        loading: true,
        terminateLoading: true,
        delay: 500
      }
    );

    const message2 = this.createChatBotMessage(
      "Which Major were you interested in viewing more information about? for major informations, simply click on the list or type in the chatbox",
      {
        loading: true,
        terminateLoading: true,
        delay: 1000,
        withAvatar: false
      }
    );

    this.addMessageToState(message, message2);
  };

  handleAAdegrees(){
    const message = this.createChatBotMessage(
      "There are currently 22 programs in the Associates in Arts Degree program.The programs offered under the Associates in Arts (A.A.) Degree are:",
      {
        widget: "AAdegrees",
        loading: true,
        terminateLoading: true,
        delay: 500
      }
    );

    const message2 = this.createChatBotMessage(
      "Which Major were you interested in viewing more information about? for major informations, simply click on the list or type in the chatbox",
      {
        loading: true,
        terminateLoading: true,
        delay: 1000,
        withAvatar: false
      }
    );

    this.addMessageToState(message,message2);
  };

  handleASdegrees(){
    const message = this.createChatBotMessage(
      "BMCC offers 26 programs for an Associates in Science Degree.The following 26 Programs are under the (A.S.) Degree:",
      {
        widget: "ASdegrees",
        loading: true,
        terminateLoading: true,
        delay: 500
      }
    );
    
    const message2 = this.createChatBotMessage(
      "Which Major were you interested in viewing more information about? for major informations, simply click on the list or type in the chatbox",
      {
        loading: true,
        terminateLoading: true,
        delay: 1000,
        withAvatar: false
      }
    );

    this.addMessageToState(message,message2);
  };

  handleCertificatePrograms(){
    const message = this.createChatBotMessage(
      "Currently BMCC offers three different Certification programs for students to pursue.",{
        withAvatar: true,
        delay: 500
      }
    );
    const message2 = this.createChatBotMessage(
      "The Certifications are as Follows, you can view any of these options in more detail:",
      {
        widget: "CertificatePrograms",
        loading: true,
        terminateLoading: true,
        delay: 1000,
      }
    );

    this.addMessageToState(message, message2);
  };

  handleAccountingCertificateProgram(actionName){
    const message = this.createChatBotMessage(
      "The Accounting Department at BMCC offers a 30-credit non-degree certificate in accounting (ACP) that will allow students to earn accounting credits on an accelerated basis.Depending upon the student’s undergraduate degree/discipline, the ACP can be completed in three semesters.",
      {
        delay: 500,
        loading: true,
        terminateLoading: true,
        withAvatar: false
      }
    );
    const message2 = this.createChatBotMessage(
      "For more information on the ACP (Accounting Certificate Program), you can view it all on the BMCC Website by clicking the link below.",
      {
        widget: "Links",
        loading: true,
        terminateLoading: true,
        delay: 1500
      }
    );
    this.addMessageToState(message, message2);
    this.addNameToState(actionName);
    this.handleEnd();
  };
  
  handleHealthInformaticsCertificateProgram(actionName){
    const message = this.createChatBotMessage(
      "The Health Informatics Certificate Program will teach you to use manual and computerized health information systems that collect data for analyzation, interpretation and dissemination to physicians, patients, public/private agencies, and other health care facilities.",
      {
        delay: 1000,
        loading: true,
        terminateLoading: true,
        withAvatar: false
      }
    );
    const message2 = this.createChatBotMessage(
      "For more information on the Health Informatics Certificate program, you can view it all on the BMCC Website by clicking the link below.",
      {
        widget: "Links",
        loading: true,
        terminateLoading: true,
        delay: 1500
      }
    );
    this.addMessageToState(message, message2);
    this.addNameToState(actionName);
    this.handleEnd();
  };

  handleSpanishTranslationCertificateProgram(actionName){
    const message = this.createChatBotMessage(
      "The Health Informatics Certificate Program will teach you to use manual and computerized health information systems that collect data for analyzation, interpretation and dissemination to physicians, patients, public/private agencies, and other health care facilities.",
      {
        delay: 1000,
        loading: true,
        terminateLoading: true,
        withAvatar: false
      }
    );
    const message2 = this.createChatBotMessage(
      "For more information on the Health Informatics Certificate program, you can view it all on the BMCC Website by clicking the link below.",
      {
        widget: "Links",
        delay: 1500,
        loading: true,
        terminateLoading: true,
      }
    );
    this.addMessageToState(message, message2);
    this.addNameToState(actionName);
    this.handleContact();
    this.handleEnd();
  };

  handleMicroCredentials(){
    const message = this.createChatBotMessage(
      "BMCC offers Cyber-Security Micro-credential, for more information click the button below.",
      {
        widget: "MicroCredentials",
        loading: true,
        terminateLoading: true,
        withAvatar: true
      }
    );
    this.addMessageToState(message);
  };

  handleMajors(names){
    console.log(names)
    if(names.length === 1) {
      const message = this.createChatBotMessage(
        `For more information on ${names}, 
        you can view it all on the BMCC Website by clicking the link below.`,
        {
          widget: "Links",
          delay: 1000,
          loading: true,
          terminateLoading: true,
          withAvatar: false
        }
      );
      const message2 = this.createChatBotMessage(`Click the button to view the Career Map/ Academic Program Maps for ${names}.`,
        {
          widget: "Maps",
          delay: 3000,
          loading: true,
          terminateLoading: true,
          withAvatar: false
        });
        this.addMessageToState(message, message2);
        this.addNameToState(...names);
    } else {
      this.handleOther();
    }
  };

  handleOther() {
    const response = [
      "I'm sorry, I did not catch that, please restate your response.",
      "I'm afraid I don't understand. Please rephrase your question.",
      "I didn't understand can you try again."
    ];
    const random = Math.floor(Math.random() * response.length);

    const message = this.createChatBotMessage(response[random],);
    const message2 = this.createChatBotMessage(
      "Here's a quick overview of what I can help you with. You can also type in.",
      {
        withAvatar: false,
        delay: 500,
        widget: "overview"
      }
    )
    this.addMessageToState(message, message2);
  };

  handleContact(){
    const message = this.createChatBotMessage("Additional Information ",{
      widget: "Contact",
      withAvatar: false,
      delay: 1000,
      loading: true,
      terminateLoading: true
    })
    this.addMessageToState(message);
  };
  
  handleEnd = () => {
    const response = [
      "What else can I help you with? Below are some possible options",
      "What else can I help you with? (Try asking me about what kind of degrees are offered at BMCC) Below are some possible options"
    ];
    const random = Math.floor(Math.random() * response.length);
    const message = this.createChatBotMessage(response[random],
      {
        widget: "overview",
        delay: 8000,
        loading: true,
        terminateLoading: true,
        withAvatar: true
      });
    this.addMessageToState(message);
  };

}

export default ActionProvider;