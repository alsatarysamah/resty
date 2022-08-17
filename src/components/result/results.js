import  "./results.scss";
import React  from "react";
import JSONPretty  from 'react-json-pretty';
function Results(props)
{
    return (
        <section>
          <JSONPretty id="json-pretty" data={props.data} ></JSONPretty>
        </section>
      );   
}


export default Results;