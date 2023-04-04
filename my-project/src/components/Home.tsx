import React from "react";
//components
import Events from "@components/components/Events";
import NavBar from "@components/components/NavBar";

const Home: React.FC = () => {
  return (
    <div className="bg-gray-50 w-full">
      <NavBar />
      <Events />
    </div>
  );
};

export default Home;
