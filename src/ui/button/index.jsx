import styles from "./button.module.css";

const Button = ({ type, text, bg, callback }) => {
  return (
    <div className={styles.container}>
      <button
        className={styles.btn}
        onClick={callback}
        type={type}
        style={{ backgroundColor: bg }}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
