import React from "react";
import AdviceCard from "./AdviceCard";
import MessageCard from "./MessageCard";

const page = () => {
  return (
    <div className="bg-second min-h-screen">
      <AdviceCard />
      <MessageCard />
    </div>
  );
};

export default page;
