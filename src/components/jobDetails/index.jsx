import Select from "../../ui/select";
import TextArea from "../../ui/textAria";
import Wrapper from "../wrapper";
import styles from "./jobDetails.module.css";

const JobDetails = ({ title }) => {
  return (
    <Wrapper title={title}>
      <div className={styles.container}>
        <div className={styles.selects}>
          <Select name={"Job type"} options={[1, 2, 3, 4, 5]} />
          <Select name={"Job course"} options={[1, 2, 3, 4, 5]} />
        </div>
        <TextArea placeholder={"Job description (optional)"} />
      </div>
    </Wrapper>
  );
};

export default JobDetails;
