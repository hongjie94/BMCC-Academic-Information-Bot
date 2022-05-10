import Options from "./reUsableComponents/Options";

const GeneralOptions = (props) => {
  const options = [
    {
      name: "ASSOCIATE IN APPLIED SCIENCE DEGREE (A.A.S.)",
      handler: props.actionProvider.handleAASdegree,
      id: 1
    },
    {
      name: "ASSOCIATE IN ARTS DEGREE (A.A.)",
      handler: props.actionProvider.handleAAdegree,
      id: 2
    },
    {
      name: "ASSOCIATE IN SCIENCE DEGREE (A.S.)",
      handler: props.actionProvider.handleASdegree,
      id: 3
    },
    {
      name: "CERTIFICATE PROGRAMS",
      handler: props.actionProvider.handleCertificatePrograms,
      id: 4
    },
    {
      name: "MICROCREDENTIAL",
      handler: props.actionProvider.handleMicrocredential,
      id: 5
    }
  ];
  return <Options options={options} {...props} />;
};

export default GeneralOptions;
