import { useState } from "react";
import Select from "./Select";
import Publish from "./Publish";
const Option = (props) => {
    const [options, setOptions] = useState([" "]);
    const [question, setQuestion] = useState(" ");
    const [added, setAdded] = useState(false);
    const [published, setPublished] = useState(false);

    const add = () => {
        const temp = {
            type: props.limit,
            question,
            options
        }
        props.setDom([...props.dom,temp]);
    }

    if (!published) {
        if (!added) {
            return (
                <div>
                    <input type="text" placeholder="enter your question" onChange={(e) => {
                        setQuestion(e.target.value);
                    }} />
                    {options.map((option, index) => {
                        return (
                            <div key={index}>
                                <input type="text" value={option} id={index} onChange={(e) => {
                                    const arr = [...options];
                                    arr[index] = e.target.value;
                                    setOptions(arr);
                                }} />
                                <button onClick={() => {
                                    const arr = [...options];
                                    arr.splice(index + 1, 0, "");
                                    setOptions(arr);
                                }}>+</button>
                                <button onClick={() => {
                                    const arr = [...options];
                                    if (arr.length !== 1)
                                        arr.splice(index, 1);
                                    setOptions(arr);
                                }}>-</button>
                            </div>
                        )
                    })}
                    {options.length >= Number(props.limit) ? <>
                        <button onClick={() => {
                            add();
                            setAdded(true);
                        }}>Add Question</button>
                        <button onClick={() => {
                            add();
                            setPublished(true);
                        }}>publish</button>
                    </> : <></>}
                </div>
            )
        }
        else {
            return (
                <Select dom={props.dom} setDom={props.setDom}/>
            )
        }
    }
    else{
        return(
            <Publish code={props.dom} />
        )
        
    }

}
export default Option;