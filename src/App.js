
import React, { useState } from 'react';

import './scss/app.scss';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Form from './components/form/form';
import Results from './components/result/results';
// import callApi from "./hooks/callApi";

function App (){
  const [data,setdata]=useState(null);
  const [requestParams,setrequestParams]=useState({
    // method:"get",
    // url:"www.google.com"

  });
  // const callApiF=callApi();
  const  callApi = (requestParams)=>  {
    // mock output
    const data = {
      count: 2,
      results: [
        {name: 'fake thing 1', url: 'http://fakethings.com/1'},
        {name: 'fake thing 2', url: 'http://fakethings.com/2'},
      ],
    };
    setdata(data);
    setrequestParams(requestParams);
    // setState({data, requestParams});
  }

  return(
    <>
 
      <React.Fragment>
        <Header />
        <div>Request Method: {requestParams.method}</div>
        <div>URL: {requestParams.url}</div>
        <Form handleApiCall={callApi} />
        <Results data={data} >hi</Results>
        <Footer />
      </React.Fragment>
  
    
    </>
  );
}



export default App;

