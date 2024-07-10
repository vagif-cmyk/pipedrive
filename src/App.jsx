import "../src/assets/styles/index.css";
import Select from "./ui/select/Select";
function App() {
  return (
    <>
    <div className="a">
      <Select name={"details1"} options={[1, 2, 3, 4, 5]} />
      <Select name={"details2"} options={[1, 2, 3, 4, 5]} />
    </div>
    </>
  );
}

export default App;
