import React from "react";
import notfound from "../Images/notfound.jpg";

export const NotFound = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          style={{ width: "40%", height: "40%" }}
          src={notfound}
          alt="Page Not Found"
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{fontWeight:500, fontSize:"25px", color:"#007dfe"}}>Page Not Found</div>
      </div>
    </>
  );
};
