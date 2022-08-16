import  "./results.scss";
import React  from "react";
import JSONPretty  from 'react-json-pretty';
function Results(props)
{
    return (
        <section>
          {/* <pre>{props.data ? JSON.stringify(props.data, undefined, 2) : <p>no response</p>}
          </pre> */}
          {/* <div></div> */}
          <JSONPretty id="json-pretty" data={props.data} ></JSONPretty>
          {/* {React.createElement(JSONPretty, { json: props.data} )} */}
        </section>
      );   
}
// const formattedBody = JSON.stringify(JSON.parse(e.target.value), null, 4);

export default Results;