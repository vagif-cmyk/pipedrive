import Input from "../../ui/input";
import Wrapper from "../wrapper";
import styles from "./clientDetails.module.css";

function ClientDetails({ title }) {
  return (
    <Wrapper title={title}>
      <div className={styles.container}>
        <div className={styles.names}>
          <Input type={"text"} placeholder="First name" required={true} />
          <Input type={"text"} placeholder="Last name" required={true} />
        </div>
        <Input type={"number"} placeholder="Phone" required={true} />
        <Input type={"text"} placeholder="Email (optional)" />
      </div>
    </Wrapper>
  );
}

export default ClientDetails;
