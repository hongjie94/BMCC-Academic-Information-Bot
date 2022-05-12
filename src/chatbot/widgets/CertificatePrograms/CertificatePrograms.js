import List from "../ReUsableComponents/Lists";

const GeneralLists = (props) => {
  const lists = [
    {
      label: "Accounting Certificate Program (ACP)"
    },
    {
      label: "Health Informatics Certificate Program"
    },
    {
      label: "Spanish Translation for the Health, Legal and Business Professions Certificate Program"
    }
  ];
  return <List lists={lists} title={'Certificate Programs'} {...props} />;
};

export default GeneralLists;
