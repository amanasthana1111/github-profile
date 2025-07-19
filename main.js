import React, { useCallback, useEffect, useState } from "react";
import ReactDom from "react-dom/client";
import Header from "./component/Header";
import Body from "./component/Body";
const App = () => {
  //header
  //body
   


  return (
   <div>
      <Header></Header>
      <Body></Body>
     
   </div>
  );
};

const root = ReactDom.createRoot(document.querySelector(".root"));
root.render(<App></App>);
