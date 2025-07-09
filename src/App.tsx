import Layout from "./layout/Layout";
import { BrowserRouter as Router } from "react-router-dom";
import Routing from "./navigation/Routing";
import { BasketProvider } from "./globalState/globalState";

const App = () => {
  return (
    <BasketProvider>
      <div>
        <Routing />
      </div>
    </BasketProvider>
  );
};

export default App;
