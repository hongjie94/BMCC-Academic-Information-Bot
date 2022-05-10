import { createChatBotMessage } from 'react-chatbot-kit';
import BotAvatar from './widgets/BotAvatar/BotAvatar';
import Overview from './widgets/Overview';
import AAdegree from './widgets/AAdegrees/AAdegree';
import Degrees from './widgets/Degrees';
import ASdegree from './widgets/ASdegree/ASdegree';
import AASdegree from './widgets/AASdegrees/AASdegree';
import CertificatePrograms from './widgets/CertificatePrograms/CertificatePrograms';
import Microcredential from './widgets/Microcredential'


const botName = 'BMCC Academic Information Bot';

const config = {
  lang: "no",
  botName: botName,
  customComponents: {
    botAvatar: (props) =><BotAvatar {... props} />
  },
  state: {
    buttonValue: ''
  },
  customStyles: {
    botMessageBox: {
      backgroundColor: '#1D56A7',
    },
    chatButton: {
      backgroundColor: '#1D56A7',
    },
  },
  initialMessages:[
    createChatBotMessage(`Hello, I’m BMCC Academic Information virtual assistant. How can I help you?`),
    createChatBotMessage(
      "Here's a quick overview of what I can help you with. You can also type in.",
      {
        withAvatar: false,
        delay: 500,
        widget: "overview"
      }
    )
  ],
  widgets: [
    {
      widgetName: "overview",
      widgetFunc: (props) => <Overview {...props} />,
      mapStateToProps: ["messages"]
    },
    {
      widgetName: "Degrees",
      widgetFunc: (props) => <Degrees {...props}/>
    },
    {
      widgetName: "AAdegree",
      widgetFunc: (props) => <AAdegree {...props}/>,
    },
    {
      widgetName: "ASdegree",
      widgetFunc: (props) => <ASdegree {...props}/>
    },
    {
      widgetName: "AASdegree",
      widgetFunc: (props) => <AASdegree  {...props}/>
    },
    {
      widgetName: "CertificatePrograms",
      widgetFunc: (props) => <CertificatePrograms  {...props}/>
    },
    {
      widgetName: "Microcredential",
      widgetFunc: (props) => <Microcredential />
    }
  ]
};

export default config;