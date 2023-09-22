import React from "react";
import { useNavigate } from "react-router-dom";

const view = () => {
  const navigate = useNavigate();
  const View = () => {
    navigate("/ViewAadhaar");
  };
  return (
    <div>
      Aadhaar view
      <button onClick={() => View()}>View Aadhaar</button>
    </div>
  );
};

export default view;
