import React from "react";
import { useNavigate } from "react-router-dom";

function View() {
  const navigate = useNavigate();

  const ViewAadhaar = () => {
    navigate("/ViewAadhaar");
  };

  return (
    <div>
      Aadhaar view
      <button onClick={ViewAadhaar}>View Aadhaar</button>
    </div>
  );
}

export default View;
