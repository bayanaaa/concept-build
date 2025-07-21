import React, { useState } from "react";
import scss from "./Switch.module.scss";

function Switch() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div
      className={scss.box}
      onClick={() => setIsOn(!isOn)}
      style={isOn ? { background: "#8ABF2E" } : {}}
    >
      <span className={`${scss.child} ${isOn ? scss.activated : ""}`}></span>
    </div>
  );
}

export default Switch;
