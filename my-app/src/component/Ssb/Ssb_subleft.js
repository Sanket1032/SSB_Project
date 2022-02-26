import { useState } from 'react';
const Ssb_subleft = (props) => {
    const [subQuestionOpen, setSubQuestionOpen] = useState(false);
    // ${ props.main ? "ssb_visible" : "ssb_notvisible" }
    return (
        <>
            <div key={props.id} onClick={() => { props.moveup(props.items.answer); setSubQuestionOpen(!subQuestionOpen); }} className="main-topic">{props.items.question}</div>
            {props.subitems.map((element) => {
                return (
                    <>
                        <li onClick={() => { props.moveup(element.answer1); }} className={`sub-question ${subQuestionOpen ? "ssb_visible" : "ssb_notvisible"}`} >{element.question1}</li>
                    </>
                )
            })}
        </>
    );
};

export default Ssb_subleft;