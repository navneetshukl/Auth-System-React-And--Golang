import React, { useEffect,useState } from "react";

const Home = (props) => {
  

  return (
    <div className="text-center">
      <h1>
        {props.name? " Welcome "+ props.name :"You are not logged in"}
      </h1>
    </div>
  );
};

export default Home;
