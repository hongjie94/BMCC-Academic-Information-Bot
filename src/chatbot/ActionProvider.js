
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
    } else {
      this.setState((state) => ({
        ...state,
        messages: [...state.messages, message]
      }));
    }
  };

  handleOptions = (options) => {
    const message = this.createChatBotMessage(
      "How can I help you? Below are some possible options.",
      {
        widget: "overview",
        loading: true,
        terminateLoading: true,
        ...options
      }
    )
    this.addMessageToState(message);
  };

  handleHello() {
    const message = this.createChatBotMessage('Hello. Nice to meet you.');

    this.addMessageToState(message);
  };

  handleThanks(){
    const response = [
      "You're welcome, i am happy to be able to assist you!",
      "You're welcome, it’s my pleasure to assist you!"
    ]
    const random = Math.floor(Math.random() * response.length);
    const message = this.createChatBotMessage(response[random]);

    this.addMessageToState(message);
    
  };

  handleDegrees(options){
    const message = this.createChatBotMessage(
      "BMCC offers an Associate in Arts, Associates in Science, and Associate in Applied Science. BMCC also offers Certification Programs and Micro-Credentials.");
    const message2 = this.createChatBotMessage(
      "Which option were you interested in ?",
      {
        widget: "Degrees",
        delay: 1000,
        loading: true,
        terminateLoading: true,
        ...options
      }
    );

    this.addMessageToState(message, message2);
  };

  handleAASdegree(options){
    const message = this.createChatBotMessage(
      "BMCC offers an Associate in Arts, Associates in Science, and Associate in Applied Science. BMCC also offers Certification Programs and Micro-Credentials.",
      {
        widget: "Degrees",
        loading: true,
        terminateLoading: true,
        ...options
      }
    );

    this.addMessageToState(message);
  };

  handleAAdegree(options){
    const message = this.createChatBotMessage(
      "BMCC offers an Associate in Arts, Associates in Science, and Associate in Applied Science. BMCC also offers Certification Programs and Micro-Credentials.",
      {
        widget: "Degrees",
        loading: true,
        terminateLoading: true,
        ...options
      }
    );

    this.addMessageToState(message);
  };

  handleAsdegree(options){
    const message = this.createChatBotMessage(
      "BMCC offers an Associate in Arts, Associates in Science, and Associate in Applied Science. BMCC also offers Certification Programs and Micro-Credentials.",
      {
        widget: "Degrees",
        loading: true,
        terminateLoading: true,
        ...options
      }
    );

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };

  handleCertificatePrograms(options){
    const message = this.createChatBotMessage(
      "Currently BMCC offers three different Certification programs for students to pursue.",
    );
    const message2 = this.createChatBotMessage(
      "The Certifications are as Follows, you can view any of these options in more detail:",
      {
        widget: "CertificatePrograms",
        loading: true,
        terminateLoading: true,
        ...options
      }
    );

    this.addMessageToState(message, message2);
  };

  handleAccountingCertificateProgram(){
    const message = this.createChatBotMessage(
      "The Accounting Department at BMCC offers a 30-credit non-degree certificate in accounting (ACP) that will allow students to earn accounting credits on an accelerated basis.Depending upon the student’s undergraduate degree/discipline, the ACP can be completed in three semesters.",
    );
    const message2 = this.createChatBotMessage(
      "For more information on the ACP (Accounting Certificate Program), you can view it all on the BMCC Website by clicking the link below.",
    );
    this.addMessageToState(message, message2);
  };

  handleHealthInformaticsCertificateProgram(){
  };

  handleSpanishTranslationCertificateProgram(){

  };

  handleMicroCredentials(){
    const message = this.createChatBotMessage(
      "BMCC offers an Associate in Arts, Associates in Science, and Associate in Applied Science. BMCC also offers Certification Programs and Micro-Credentials.",
      {
        widget: "Degrees",
        loading: true,
        terminateLoading: true,
        withAvatar: true
      }
    );

    this.addMessageToState(message);
  };

  handleMajors(){
    alert('hi')
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
}

export default ActionProvider;