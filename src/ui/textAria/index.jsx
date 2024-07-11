import styles from "./textArea.module.css";

const TextArea = ({ required, placeholder }) => {
  return (
    <textarea
      className={styles.area}
      required={required}
      placeholder={placeholder}
    ></textarea>
  );
};

export default TextArea;
