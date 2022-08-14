import  "./results.scss";
import React  from "react";
import JSONPretty ,{JSONPrettyMon} from 'react-json-pretty';
function Results(props)
{
    return (
        <section>
          <pre>{props.data ? JSON.stringify(props.data, undefined, 2) : null}
          </pre>
          {/* <div></div> */}
          {/* <JSONPretty id="json-pretty" data={props.data} ></JSONPretty> */}
          {/* {React.createElement(JSONPretty, { json: props.data} )} */}
        </section>
      );   
}

export default Results;