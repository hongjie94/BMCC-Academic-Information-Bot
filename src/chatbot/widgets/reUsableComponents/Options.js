
const Options = (props) => {
 
  const actionHandler = (actionName) => {
    console.log(actionName)
    switch(actionName) {
      case "handleDegrees":
        props.actionProvider.handleDegrees();
        break;
      case 'handleCertificatePrograms':
        props.actionProvider.handleCertificatePrograms();
        break;
      case 'handleMicroCredentials':
        props.actionProvider.handleMicroCredentials();
        break;
      default:
        // code block
    }
    
  }
  return (
    <div className="options">
      <div className="options-container">
        {props.options.map((option) => {
          return (
            <div
              className="option-item"
              onClick={()=> { 
                actionHandler(option.handler)}}
              key={option.id}
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
