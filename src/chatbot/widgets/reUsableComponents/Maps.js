import MajorDatas from "../../../data/MajorDatas.json";
import React, {useContext} from 'react';
import { UserContext } from "../../../UserContext";

const CareerMaps = (props) => {

  const {setValue} = useContext(UserContext);

  const Result = MajorDatas.filter((data)=>{
    return data.name === props.name || data.title === props.name;
  });

  const ClickHandler = (e, url) => {
    setValue(url);
    e.preventDefault();
  }

  return (
    <div className="options">
      <div className="options-container">
    
           { Result[0].careerMap && 
            <a className="mapsAtag" href={Result[0].careerMap}>
                <div
                  className="mapsButtons"
                  onClick={(e)=> {ClickHandler(e, Result[0].careerMap)}}
                >CAREER MAP
                </div>
              </a>
            }

          {(!Result[0].careerMap)  &&
              <p className="notAvailableMaps">
                <span>⚠️</span>
                 The Career Map/ Academic Program Maps for {Result[0].name} are currently unavailable.
              </p>
          }

          { (Result[0].academicMap2YearPlan) && 
            <a className="mapsAtag" href={Result[0].academicMap2YearPlan}>
                <div
                  className="mapsButtons plan"
                  onClick={(e)=> {ClickHandler(e, Result[0].academicMap2YearPlan)}}
                >Academic Map 2Year Plan
                </div>
              </a>
            }

          { (Result[0].academicMap5semesterPlan) && 
            <a className="mapsAtag" href={Result[0].academicMap5semesterPlan}>
                <div
                  className="mapsButtons plan"
                  onClick={(e)=> {ClickHandler(e, Result[0].academicMap5semesterPlan)}}
                >Academic Map 5semester Plan
                </div>
              </a>
            }

          { Result[0].mutiplePlan && 
            Result[0].mutiplePlan.map((data)=> {
              return (
              <>
                <h1 className='mapTitle'>{data.planName}</h1>
                <a className="mapsAtag" href={data.twoYearPlan}>
                    <div
                      className="mapsButtons plan"
                      onClick={(e)=> {ClickHandler(e, data.twoYearPlan)}}
                    >2 Year Plan
                    </div>
                  </a>
    
                  <a className="mapsAtag" href={data.fiveSemsterPlan}>
                    <div
                      className="mapsButtons plan"
                      onClick={(e)=> {ClickHandler(e, data.fiveSemsterPlan)}}
                    >5 semester Plan
                    </div>
                  </a>
                </>
              )
            })
          }

          { Result[0].NursingMap && 
            Result[0].NursingMap.map((data)=> {
              return (
              <>
                <h1 className='mapTitle'>{data.planName}</h1>
                {!data.Plan &&
                <>
                  <a className="mapsAtag" href={data.Plan1}>
                    <div
                      className="mapsButtons plan"
                      onClick={(e)=> {ClickHandler(e, data.Plan1)}}
                    > Day Program
                    </div>
                  </a>
                  <a className="mapsAtag" href={data.Plan2}>
                    <div
                      className="mapsButtons plan"
                      onClick={(e)=> {ClickHandler(e, data.Plan2)}}
                    >Evening/Weekend Program
                    </div>
                  </a>
                </>
                }
              
                {data.Plan &&
                  <a className="mapsAtag" href={data.Plan}>
                    <div
                      className="mapsButtons plan"
                      onClick={(e)=> {ClickHandler(e, data.Plan)}}
                    >Day & Evening/Weekend Program
                    </div>
                  </a>
                }
                </>
              )
            })
          }
        
      </div>
    </div>
  );
};

export default CareerMaps;
