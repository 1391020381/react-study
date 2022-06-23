import { useEffect, useState } from "react";

// domNode default to document.body
const useKeyPress = (domNode = document.body) => {
  const [key, setKey] = useState(null);
  useEffect(() => {
    const handleKeyPress = (evt) => {
      setKey(evt.key);
    };
    domNode.addEventListener("keypress", handleKeyPress);
    return () => {
      domNode.removeEventListener("keypress", handleKeyPress);
    };
  }, [domNode]);
  return key;
};

export default () => {
  const key = useKeyPress();
  console.log(key);
  return (
    <div>
      <h1>UseKeyPress</h1>
      <label>Key pressed: {key || "N/A"}</label>
    </div>
  );
};
