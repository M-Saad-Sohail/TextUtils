import { useState } from "react";
import CaseConverter from "./components/CaseConverter";
import Calculator from "./components/Calculator";
import DarkMode from "./components/DarkMode";
import Alert from "./components/Alert";

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = ({messege, bg, color}) => {
    setAlert({
      msg: messege,
      bg: bg,
      color: color,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  return (
    <div className="App">
      <CaseConverter showAlert={showAlert} />
      <Alert alert={alert} />
      {/* <Calculator /> */}
      {/* <DarkMode /> */}
    </div>
  );
}

export default App;
