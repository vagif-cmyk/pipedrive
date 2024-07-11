import "../src/assets/styles/index.css";
import AppContext from "./context/AppContext";
import Form from "./ui/form";

function App() {
  return (
    <AppContext>
      <Form />
    </AppContext>
  );
}

export default App;
