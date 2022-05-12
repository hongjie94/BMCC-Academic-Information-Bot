import Options from "./ReUsableComponents/Options";
const GeneralOptions = (props) => {
  const options = [
    {
      name: "Degrees",
      handler: 'handleDegrees',
    },
    {
      name: "Certifications",
      handler: "handleCertificatePrograms",
    },
    {
      name: "Micro-Credentials",
      handler:"handleMicroCredentials",
    }
  ];
    return <Options options={options} {...props} />;
};

export default GeneralOptions;
