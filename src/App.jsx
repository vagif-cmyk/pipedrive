import "../src/assets/styles/index.css";
import ClientDetails from "./components/clientDetails";
import JobDetails from "./components/jobDetails";
import Scheduled from "./components/scheduled";
import ServiceLocation from "./components/serviceLocation";
import AppContext from "./context/AppContext";

function App() {
  return (
    <AppContext>
      <div className="container">
        <ClientDetails title="Client details" />
        <JobDetails title="Job details" />
        <ServiceLocation title="Service location" />
        <Scheduled title="Scheduled" />
      </div>
    </AppContext>
  );
}

export default App;
