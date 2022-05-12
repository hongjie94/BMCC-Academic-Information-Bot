import Options from "./ReUsableComponents/Options";

const GeneralOptions = (props) => {
  const options = [
    {
      name: "ASSOCIATE IN APPLIED SCIENCE DEGREE (A.A.S.)",
      handler: "handleAASdegrees",
    },
    {
      name: "ASSOCIATE IN ARTS DEGREE (A.A.)",
      handler: "handleAAdegrees",
    },
    {
      name: "ASSOCIATE IN SCIENCE DEGREE (A.S.)",
      handler: "handleASdegrees",
    },
    {
      name: "CERTIFICATE PROGRAMS",
      handler: 'handleCertificatePrograms',
    },
    {
      name: "MICROCREDENTIAL",
      handler: 'handleMicroCredentials',
    }
  ];
  return <Options options={options} {...props} />;
};

export default GeneralOptions;
