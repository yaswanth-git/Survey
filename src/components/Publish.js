const Publish = (props) => {
    return (
            <ol>
                {props.code.map((i, index) => {
                    if (i.type === "2") {
                        return (
                            <li key={index}>
                                <h3>{i.question}</h3>
                                {i.options.map((option, idx) => {
                                    return <div key={idx}><input name={i.question} type="radio" value={option} /><label htmlFor={option} >{option}</label></div>
                                })}
                            </li>
                        )
                    }
                    else {
                        return (
                            <li key={index}>
                                <h3>{i.question}</h3>
                                {i.options.map((option, idx) => {
                                    return <div key={idx}><input name={i.question} type="checkbox" value={option} /><label htmlFor={option}>{option}</label></div>
                                })}
                            </li>
                        )
                    }
                })
                }
                <button onClick={() => alert("end of the project")}>confirm</button>
            </ol>
    )

}
export default Publish;
