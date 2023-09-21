import React from "react";
import { useNavigate } from "react-router-dom";

const view = () => {
  const navigate = useNavigate();
  return (
    <div>
      Aadhaar view
      <button onClick={() => navigate("/ViewAadhaar")}>View Aadhaar</button>
    </div>
  );
};

export default view;
