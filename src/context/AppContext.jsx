import { createContext, useState } from "react";
import { defaultContextData } from "../data";

export const FormContext = createContext();

const AppContext = ({ children }) => {
  const [data, setData] = useState(defaultContextData);

  return (
    <FormContext.Provider value={{ data, setData }}>
      {children}
    </FormContext.Provider>
  );
};

export default AppContext;
