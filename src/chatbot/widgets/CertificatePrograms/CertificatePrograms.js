import Options from "../reUsableComponents/Options";

const GeneralOptions = (props) => {
  const options = [
    {
      name: "Accounting Certificate Program (ACP)",
      handler: 'handleAccountingCertificateProgram',
      id: 1
    },
    {
      name: "Health Informatics Certificate Program",
      handler: 'handleHealthInformaticsCertificateProgram',
      id: 2
    },
    {
      name: "Spanish Translation for the Health, Legal and Business Professions Certificate Program",
      handler: 'SpanishTranslationCertificateProgram',
      id: 3
    }
  ];
  return <Options options={options} {...props} />;
};

export default GeneralOptions;
