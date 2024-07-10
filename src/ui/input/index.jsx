import { useState } from "react";
import styles from "./input.module.css";

function Input({ type, placeholder, required, icon }) {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div className={styles.wrapper}>
      <input
        required={required}
        className={styles.input}
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
        value={value}
      />
      {icon && <div className={styles.icon}>{icon}</div>}
    </div>
  );
}

export default Input;
