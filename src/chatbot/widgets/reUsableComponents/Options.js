
const Options = (props) => {
  const actionHandler = (actionName) => {
    switch(actionName) {
      case "handleDegrees":
        props.actionProvider.handleDegrees();
        break;
      case "handleAASdegrees":
        props.actionProvider.handleAASdegrees();
        break;
      case "handleAAdegrees":
        props.actionProvider.handleAAdegrees();
        break;
      case "handleASdegrees":
        props.actionProvider.handleASdegrees();
        break;
      case 'handleCertificatePrograms':
        props.actionProvider.handleCertificatePrograms();
        break;
      case 'handleMicroCredentials':
        props.actionProvider.handleMicroCredentials();
        break;
      case 'handleAccountingCertificateProgram':
        props.actionProvider.handleAccountingCertificateProgram();
        break;
      case 'handleHealthInformaticsCertificateProgram':
        props.actionProvider.handleHealthInformaticsCertificateProgram();
        break;
      case 'handleSpanishTranslationCertificateProgram':
        props.actionProvider.handleSpanishTranslationCertificateProgram();
        break;
      case 'majors':
        props.actionProvider.handleMajors(['Cyber-Security']);
        break;
      default:
    }
  }
  return (
    <div className="options">
      <div className="options-container">
        {props.options.map((option,i) => {
          return (
            <div
              className="option-item"
              onClick={()=> {actionHandler(option.handler)}}
              key={i}
            >
              {option.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Options;
