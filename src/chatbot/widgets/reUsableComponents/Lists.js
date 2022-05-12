const List = (props) => {
  const TargetLists = (listName) => {
    switch(listName) {
      case 'Accounting Certificate Program (ACP)':
        props.actionProvider.handleAccountingCertificateProgram(listName);
        break;
      case 'Health Informatics Certificate Program':
        props.actionProvider.handleHealthInformaticsCertificateProgram(listName);
        break;
      case 'Spanish Translation for the Health, Legal and Business Professions Certificate Program':
        props.actionProvider.handleSpanishTranslationCertificateProgram(listName);
        break;
      default:
        props.actionProvider.handleMajors([listName]);
    }
  }
  return (
    <div className="list-box">
      <h1 className="list-title">{props.title}</h1>
      <ul className="list">
        {props.lists.map((list, i) => {
            return (
            <li className="list-item"
              onClick={()=> {TargetLists(list.label)}}
              key={i}
              >
              {list.label}
            </li>
            );
          })}
      </ul>
    </div>
    
  );
};

export default List;