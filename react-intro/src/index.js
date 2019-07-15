import React from "react";
import ReactDOM from "react-dom";
import "./style.css"; // in src

// const name = "John Doe";
// const greeting = <div>Hello {name}</div>;

const data = {
  imgUrl: "https://source.unsplash.com/random/800x600"
};

const inlineStyle = {
  textAlign: "center"
};

const element = (
  <div>
    <h1 className="heading" style={{ textAlign: "center" }}>
      Welcome
    </h1>
    {/* any element that has no children must be self-closed */}
    <img src={data.imgUrl} />
  </div>
);

/*
const element = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      {
        className: "heading",
        style: {
          textAlign: "center"
        }
      },
      "Welcome!"
    ),
    React.createElement("img", {
      src: data.imgUrl
    })
  );
*/

ReactDOM.render(element, document.getElementById("root"));
