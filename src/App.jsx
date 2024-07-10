import "../src/assets/styles/index.css";
import AppContext from "./context/AppContext";
import Alarm from "./svg/Alarm";
import Input from "./ui/input";
import Select from "./ui/select";

function App() {
  return (
    <AppContext>
      <Select name={"details1"} options={[1, 2, 3, 4, 5]} />
      <Select name={"details2"} options={[1, 2, 3, 4, 5]} />

      <Input type={"date"} required={true} />
      <Input type={"text"} required={true} icon={<Alarm />} />
      <Input type={"number"} required={true} />
    </AppContext>
  );
}

export default App;
