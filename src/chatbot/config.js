import { createChatBotMessage } from 'react-chatbot-kit';
import BotAvatar from './widgets/BotAvatar/BotAvatar';
import Overview from './widgets/Overview';
import Degrees from './widgets/Degrees';
import AAdegrees from './widgets/AAdegrees';
import ASdegrees from './widgets/ASdegrees';
import AASdegrees from './widgets/AASdegrees';
import CertificatePrograms from './widgets/CertificatePrograms/CertificatePrograms';
import MicroCredentials from './widgets/MicroCredentials'
import Links from './widgets/ReUsableComponents/Links';
import Contact from './widgets/CertificatePrograms/Contact';
import Maps from './widgets/ReUsableComponents/Maps';

const botName = 'BMCC Academic Information Bot';

const config = {
  lang: "no",
  botName: botName,
  customComponents: {
    botAvatar: (props) =><BotAvatar {... props} />
  },
  state: {
    name:[]
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
      widgetName: "AAdegrees",
      widgetFunc: (props) => <AAdegrees {...props}/>,
    },
    {
      widgetName: "ASdegrees",
      widgetFunc: (props) => <ASdegrees {...props}/>
    },
    {
      widgetName: "AASdegrees",
      widgetFunc: (props) => <AASdegrees  {...props}/>
    },
    {
      widgetName: "CertificatePrograms",
      widgetFunc: (props) => <CertificatePrograms  {...props}/>
    },
    {
      widgetName: "MicroCredentials",
      widgetFunc: (props) => <MicroCredentials  {...props}/>
    },
    {
      widgetName: "Contact",
      widgetFunc: (props) => <Contact  {...props}/>
    },
    {
      widgetName: "Links",
      widgetFunc: (props) => <Links  {...props}/>,
      mapStateToProps: ["name"]
    },
    {
      widgetName: "Maps",
      widgetFunc: (props) => <Maps  {...props}/>,
      mapStateToProps: ["name"]
    }
  ]
};

export default config;