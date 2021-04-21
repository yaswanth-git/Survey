import {useState} from "react";
import Select from "./components/Select"; 
const App = (props) => {
  const [init,setInit] = useState("");
  const [dom, setDom] = useState([]);
  if(init === ""){
    return (
      <div className="App">
        <button onClick={() => setInit("create")}>Create Survey</button><br/>
        <button onClick={() => setInit("take")}>Take Survey</button>
      </div>
    );
  }
  else if(init === "create"){
    return(
      <Select dom={dom} setDom={setDom}/>
    )
  }
  else{
    return(
      <div>There are no suveys to take</div>
    )
  }
  
}

export default App;
