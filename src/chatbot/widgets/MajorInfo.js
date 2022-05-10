
import ClipLoader from "react-spinners/ClipLoader";



const Statistics = () => {
  

  

  return (
    <div className="stats">
      <div className="column-left">
        <p> Total Cases :</p>
        <p> New Cases :</p>
        <p> Recovered :</p>
        <p> Deaths :</p>
      </div>

      <div className="column-right">
        <ClipLoader color={"#fff"} />
        <p>1</p>
        <p>2</p>
        <p>3</p>
        <p>4</p>
      </div>
    </div>
  );
};

export default Statistics;
