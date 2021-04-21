const Publish = (props) => {
    console.log(props);
    return (
        <>
        {props.code.map((i,index) => {
                if (i.type === "2") {
                    return (
                            <div key={index}>
                                <p>{i.question}</p>
                                {i.options.map((option,idx) => {
                                    return <div key={idx}><input name={i.question} type="radio" value={option} /><label htmlFor={option} >{option}</label></div>
                                })}
                            </div>
                    )
                }
                else {
                    return (
                            <div key={index}>
                                <p>{i.question}</p>
                                {i.options.map((option,idx) => {
                                    return <div key={idx}><input name={i.question} type="checkbox" value={option} /><label htmlFor={option}>{option}</label></div>
                                })}
                            </div>
                    )
                }
            })
        }
        <button onClick={() => alert("end of the project") }>confirm</button>
        </>
    )

}
export default Publish;
