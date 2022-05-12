import WastonDatas from '../../data/WastonAssistantData.json'
import List from "./ReUsableComponents/Lists";

const AASdegrees = (props) => {
 
  const AAS = WastonDatas.dialog_nodes.filter((datas)=>{
   return datas.dialog_node === 'node_10_1651275501842';
  });

  const AASmajorNames = AAS[0].output.generic[1].options;
  const MajorTitle = AAS[0].output.generic[1].title;

  return <List  lists={AASmajorNames} title={MajorTitle} {...props} />;
};

export default AASdegrees;
