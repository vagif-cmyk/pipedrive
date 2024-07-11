import styles from "./wrapper.module.css";

const Wrapper = ({ title, children }) => {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>{title}</h3>
      {children}
    </div>
  );
};

export default Wrapper;
