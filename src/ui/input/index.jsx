import { useState } from "react";
import styles from "./input.module.css";

function Input({ type, placeholder, required }) {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <input
      required={required}
      className={styles.input}
      type={type}
      placeholder={placeholder}
      onChange={handleChange}
      value={value}
    />
  );
}

export default Input;
