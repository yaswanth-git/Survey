import { useState } from "react";
import Option from "./Option";

const Select = (props) => {
    const [init, setInit] = useState("");
    if (init === "") {
        return (
            <div>
                <select onChange={(e) => {
                    setInit(e.target.value);
                }}>
                    <option value="">Selct the type of question</option>
                    <option value="single">Single select</option>
                    <option value="multi">Multi-select</option>
                </select>
            </div>
        )
    }
    else if (init === "single") {
        return (
            <div className="App">
                <Option limit="2" dom={props.dom} setDom={props.setDom} />
            </div>
        )
    }
    else {
        return (
            <div className="App">
            <Option limit="4" dom={props.dom} setDom={props.setDom} />
            </div>
        )
    }
}

export default Select;