import WastonDatas from '../../data/WastonAssistantData.json'
import List from "./ReUsableComponents/Lists";

const ASdegrees = (props) => {
  const AS = WastonDatas.dialog_nodes.filter((datas)=>{
    return datas.dialog_node === 'node_8_1651291828066';
   });
 
  const ASmajorNames = AS[0].output.generic[1].options;
  const MajorTitle = AS[0].output.generic[1].title;
 
  return <List  lists={ASmajorNames} title={MajorTitle} {...props} />;
};

export default ASdegrees;
