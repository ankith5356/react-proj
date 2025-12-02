import React from "react";
import RightCardContent from "./RightCardContent";

const RightCard = () => {
  return (
    <div className="h-full overflow-hidden relative w-80 rounded-4xl">
      <img
        className="h-full w-full object-cover"
        src="https://images.unsplash.com/photo-1513128034602-7814ccaddd4e?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""  />
<RightCardContent />
    </div>
  );
};

export default RightCard;
