
import React, { useState } from 'react';
// import axios from "axios";

import './scss/app.scss';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Form from './components/form/form';
import Results from './components/result/results';
import axios from 'axios';


function App (){
  const [data,setdata]=useState(
    {
      header:"header",
      count:"0",
      response:""
    }
  );
  const [divData,setdivData]=useState({
    method:"get",
    url:"https://pokeapi.co/api/v2/pokemon"

  });
  // const callApiF=callApi();
  
  const  callApi = (requestParams)=>  {
  ///////////////////get//////////////////////
    if(requestParams.method=="get"){
      axios.get(requestParams.url).then((data)=>{
        // result=data.data;
        // data.data.length
        const formData = {
          header:data.headers,
          count:data.data.length ,
          data:data.data,
        }
        
        setdata(formData);
      }).catch();
    }
////////////////post///////////////////////////
    if(requestParams.method=="post"){
      axios.post(requestParams.url, requestParams.body)
      .then(function (data) {
        const formData = {
          header:data.headers,
          count:1 ,
          data:data.data,
        }
        
        setdata(formData);
      })
      .catch(function (error) {
        console.log(error);
      });
    }
    ///////////////////////delete///////////////////
    if(requestParams.method=="delete"){
      axios.delete(requestParams.url).then((data)=>{
        const formData = {
          header:data.headers,
          count:1 ,
          data:data.data,
        }
        
        setdata(formData);
      }).catch((e)=>{
        console.log(e);
      });
    }
    ///////////////////put//////////////////
    if(requestParams.method=="put"){
      axios.put(requestParams.url,  requestParams.body ).
    then((data)=>{
      const formData = {
        header:data.headers,
        count:1 ,
        data:data.data,
      }
      
      setdata(formData);
    }).catch((e)=>{

    });
  }
    setdivData(requestParams);
  }

  return(
    <>
 
      <React.Fragment>
        <Header />
        <Form handleApiCall={callApi} />
        <div>Request Method: {divData.method}</div>
        <div>URL: {divData.url}</div>
        <Results data={data} >hi</Results>
        <Footer />
      </React.Fragment>
  
    
    </>
  );
}



export default App;

