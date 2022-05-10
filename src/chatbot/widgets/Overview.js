import Options from "./reUsableComponents/Options";
const GeneralOptions = (props) => {
  const options = [
    {
      name: "Degrees",
      handler: 'handleDegrees',
      id: 1
    },
    {
      name: "Certifications",
      handler: "handleCertificatePrograms",
      id: 2
    },
    {
      name: "Micro-Credentials",
      handler:"handleMicroCredentials",
      id: 3
    }
  ];
    return <Options options={options} {...props} />;
};

export default GeneralOptions;
