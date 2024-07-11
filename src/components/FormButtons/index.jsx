import Button from "../../ui/button";
import styles from "./formButtons.module.css";

const FormButtons = () => {
  return (
    <div className={styles.container}>
      <Button type={'submit'} text={"Create job"} bg={"rgb(215 214 94)"} />
      <Button type={'button'} text={"Save info"} bg={"rgb(178 178 178)"} />
    </div>
  );
};

export default FormButtons;
