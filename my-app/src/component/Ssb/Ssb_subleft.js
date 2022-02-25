
const Ssb_subleft = (props) => {
    return (
        <>
            {/* <div>{props.element}</div> */}
            {props.subitems.map((element) => {
                console.log(props.subitems);
                return (
                    <>
                        <li className="sub-question">{element.question1}</li>
                    </>
                )
            })}
        </>
    );
};

export default Ssb_subleft;