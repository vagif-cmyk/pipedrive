import styles from "./serviceLocation.module.css";

import Wrapper from "../wrapper";
import Select from "../../ui/select";
import Input from "../../ui/input";

const ServiceLocation = ({ title }) => {
  return (
    <Wrapper title={title}>
      <div className={styles.container}>
        <Input placeholder={"Address"} type={"text"} />
        <Input placeholder={"City"} type={"text"} />
        <Input placeholder={"State"} type={"text"} />
        <div className={styles.bottom}>
          <Input placeholder={"Zip code"} type={"number"} />
          <Select name={"Area"} options={[123, 233, 354, 423, 875]} />
        </div>
      </div>
    </Wrapper>
  );
};

export default ServiceLocation;
