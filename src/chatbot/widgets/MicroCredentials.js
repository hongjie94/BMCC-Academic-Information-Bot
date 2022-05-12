import Options from "./ReUsableComponents/Options";

const MicroCredentials = (props) => {
  const options = [
    {
      name: "Cyber-Security",
      handler: 'majors',
    }
  ];
  return <Options options={options} {...props} />;
};

export default MicroCredentials;
