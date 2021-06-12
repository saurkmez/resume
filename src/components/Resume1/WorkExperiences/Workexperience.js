import React, { useState } from "react";
import Addexperience from "./Addexperience";

function Workexperience() {
  const [add, setAdd] = useState([]);
  const submitHandler = (e) => {
    e.preventDefault();
    setAdd([...add, <Addexperience />]);
  };
  return (
    <div className="experiencestage">
      <div className="experienceheader">
        <h2>Work Experience</h2>

        <i
          onClick={submitHandler}
          className="far fa-plus-square fa-2x"
          style={{ marginRight: "10%" }}
        ></i>
      </div>
      <div className="experiencedescription">
        <Addexperience />
        {add.map((experiences) => (
          <Addexperience />
        ))}
      </div>
    </div>
  );
}
export default Workexperience;
