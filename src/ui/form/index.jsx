import ClientDetails from "../../components/clientDetails";
import FormButtons from "../../components/FormButtons";
import JobDetails from "../../components/jobDetails";
import Scheduled from "../../components/scheduled";
import ServiceLocation from "../../components/serviceLocation";
import styles from "./form.module.css";

function Form() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit');
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <ClientDetails title="Client details" />
      <JobDetails title="Job details" />
      <ServiceLocation title="Service location" />
      <Scheduled title="Scheduled" />
      <FormButtons/>
    </form>
  );
}

export default Form;
