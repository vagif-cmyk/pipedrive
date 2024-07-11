import Input from "../../ui/input";
import Select from "../../ui/select";
import Wrapper from "../wrapper";
import Alarm from "../../svg/Alarm";
import styles from "./scheduled.module.css";

const Scheduled = ({ title }) => {
  return (
    <Wrapper title={title}>
      <div className={styles.container}>
        <Input type={"date"} placeholder={"Start date"} />
        <div className={styles.middle}>
          <Input type={"text"} placeholder={"Start time"} icon={<Alarm />} />
          <Input type={"text"} placeholder={"End time"} icon={<Alarm />} />
        </div>
        <Select name={"Test select"} options={[1, 2, 3, 4, 5]} />
      </div>
    </Wrapper>
  );
};

export default Scheduled;
