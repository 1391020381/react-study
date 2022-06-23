import { useRef } from "react";

export default function MyForm() {
  const inputRef = useRef();
  const handleSubmit = (evt) => {
    evt.preventDefault();
    alert("Name: " + inputRef.current.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" ref={inputRef} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}
