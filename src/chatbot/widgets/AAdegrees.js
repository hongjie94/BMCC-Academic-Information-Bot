import WastonDatas from '../../data/WastonAssistantData.json'
import List from "./ReUsableComponents/Lists";

const AAdegrees = (props) => {
  const AA = WastonDatas.dialog_nodes.filter((datas)=>{
   return datas.dialog_node === 'node_4_1651816432067';
  });

  const AAmajorNames = AA[0].output.generic[1].options;
  const MajorTitle = AA[0].output.generic[1].title;

  return <List  lists={AAmajorNames} title={MajorTitle} {...props} />;
};

export default AAdegrees;
