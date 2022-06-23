import { useState } from "react";

function ToggleButton({ value, onChange }) {
  const handleClick = () => {
    onChange(!value);
  };
  return (
    <button style={{ width: "60px" }} onClick={handleClick}>
      <span>{value ? "On" : "Off"}</span>
    </button>
  );
}

export default () => {
  const [on, setOn] = useState(true);
  return (
    <>
      <h1>Toggle Button</h1>
      <ToggleButton value={on} onChange={(value) => setOn(value)} />
    </>
  );
};
