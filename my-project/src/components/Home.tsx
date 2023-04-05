import React from "react";
//components
import EventCard from "@components/components/EventCard";
import NavBar from "@components/components/NavBar";

const Home: React.FC = () => {
  return (
    <div className="bg-gray-50 w-full">
      <NavBar />
      <EventCard />
    </div>
  );
};

export default Home;
