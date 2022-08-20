import React from "react";
import { useState } from "react";
import "./form.scss";

function Form(props) {
  const [method, setMethod] = useState("get");
  const [apiUrl, seturl] = useState();
  const [body, setbody] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      method: method,
      url: apiUrl,
      body: body,
    };
    // console.log(formData);
    props.isClicked(false);
    props.handleApiCall(formData);
  };
  const inputHandler = (e) => {
    let x = document.getElementById("u").value;
    seturl(x);
  };
  const handlebody = (e) => {
    let x = document.getElementById("body").value;

    const formattedBody = JSON.parse(x);

    setbody(formattedBody);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <span>URL: </span>
          <input
            name="url"
            type="text"
            id="u"
            onInput={inputHandler}
            data-testid="url"
          />
          <button type="submit" data-testid="go">
            GO!
          </button>
        </label>
        <label className="methods">
          <span
            id="get"
            onClick={() => {
              setMethod("get");
            }}
            data-testid="get"
          >
            GET
          </span>
          <span
            id="post"
            onClick={() => {
              setMethod("post");
            }}
          >
            POST
          </span>
          <span
            id="put"
            onClick={() => {
              setMethod("put");
            }}
          >
            PUT
          </span>
          <span
            id="delete"
            onClick={() => {
              setMethod("delete");
            }}
          >
            DELETE
          </span>
        </label>
        {method == "post" || method == "put" ? (
          <textarea
            id="body"
            onInput={handlebody}
            placeholder="name=samah"
          ></textarea>
        ) : null}
      </form>
    </>
  );
}

export default Form;
