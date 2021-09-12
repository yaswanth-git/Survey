const Publish = (props) => {
    return (
            <ol>
                {props.code.map((i, index) => {
                    if(i.question){
                    if (i.type === "2") {
                        return (
                            <li key={index}>
                                <h3>{i.question}</h3>
                                {i.options.map((option, idx) => {
                                    if(option)
                                        return <div key={idx}><input name={index} type="radio" value={option} /><label htmlFor={option} >{option}</label></div>
                                    return null;
                                })}
                            </li>
                            
                        )
                    }
                    else {
                        return ( 
                            <li key={index}>
                               <h3>{i.question}</h3>
                                {i.options.map((option, idx) => {
                                    if(option)
                                        return <div key={idx}><input name={index} type="checkbox" value={option} /><label htmlFor={option}>{option}</label></div>
                                    return null;
                                })}
                            </li>
                        )
                    }
                }
                return null;
                })
                }
                <button onClick={() => alert("end of the project")}>confirm</button>
            </ol>
    )

}
export default Publish;
