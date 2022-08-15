import React, { useState, useEffect } from "react";
// import axios from "axios";

import "./scss/app.scss";

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Form from "./components/form/form";
import Results from "./components/result/results";
import axios from "axios";

function App() {
  const [data, setdata] = useState({
    response: "  ",
  });
  const [divData, setdivData] = useState({
    method: "get",
    // url: "",
  });
 
  useEffect(() => {
    console.log("hi");
    ///////////get////////////////////
    if (divData.method == "get") {
      axios
        .get(divData.url)
        .then((data) => {
          // result=data.data;
          // data.data.length
          const formData = {
            header: data.headers,
            count: data.data.length,
            data: data.data,
          };

          setdata(formData);
        })
        .catch((e) => {
          console.log(e);
          setdata({stauts:"loading..."})
        });
    }
    //////////////post//////////////////////
     if (divData.method == "post") {
      axios
        .post(divData.url, divData.body)
        .then(function (data) {
          const formData = {
            header: data.headers,
            count: 1,
            data: data.data,
          };

          setdata(formData);
        })
        .catch((e) => {
          console.log(e);
          setdata({stauts:"loading..."})
        });
    }
     ///////////////////////delete///////////////////
   
     if (divData.method == "delete") {
      axios
        .delete(divData.url)
        .then((data) => {
          console.log("oooooooooo  ",data.data);
          const formData = {
            header: data.headers,
            count: 1,
            data: data.data,
          };

          setdata(formData);
        })
        .catch((e) => {
          console.log(e);
          setdata({stauts:"loading..."})
        });
    }
    ///////////////////put//////////////////
    if (divData.method == "put") {
      axios
        .put(divData.url, divData.body)
        .then((data) => {
          const formData = {
            header: data.headers,
            count: 1,
            data: data.data,
          };

          setdata(formData);
        })
        .catch((e) => {
          console.log(e);
          setdata({stauts:"loading..."})
        });
    }
  }, [divData]);

  const callApi = (requestParams) => {
    
    setdivData(requestParams);
    setdata({});
  };

  return (
    <>
      <React.Fragment>
        <Header />
        <Form handleApiCall={callApi} />
        <div data-testid="method">Request Method: {divData.method}</div>
        <div data-testid="urlDiv">URL: {divData.url}</div>
        {<Results data={data}></Results>}
        <Footer />
      </React.Fragment>
    </>
  );
}

export default App;
