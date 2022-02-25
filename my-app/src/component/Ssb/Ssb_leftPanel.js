const Ssb_leftpanel=(props)=>{
    return(
        <div className="leftPanel">
            {props.ssb_data.map((item) => {
                return (
                    <>
                        <div className="main-topic">{item.question}</div>
                        <ul className="sub-topic">
                            {props.ssb_data.subquestion.map((element) => {
                                return (
                                    <>
                                        <li className="sub-question">{element.question1}</li>
                                    </>
                                )
                            })}
                        </ul>
                    </>
                )
            })}
        </div>
    );
};

export default Ssb_leftpanel;