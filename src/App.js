import { useState } from "react";
import Select from "./components/Select";
const App = (props) => {
  const [init, setInit] = useState("");
  const [dom, setDom] = useState([]);
  if (init === "") {
    return (
      <div className="App">
        <div>
          <h1>Magic</h1>
          <button onClick={() => setInit("create")}>Create Survey</button><br />
          <button onClick={() => setInit("take")}>Take Survey</button>
        </div>
      </div>
    );
  }
  else if (init === "create") {
    return (
      <div className="App">
        <Select dom={dom} setDom={setDom} />
      </div>
    )
  }
  else {
    return (
      <div className="App">There are no suveys to take</div>
    )
  }

}

export default App;
