import React from "react";
import Events from "./Events";
import NavBar from "./NavBar";

const Home = () => {
  return (
    <div className="bg-gray-50 w-full">
      <NavBar />
      <Events />
    </div>
  );
};

export default Home;
