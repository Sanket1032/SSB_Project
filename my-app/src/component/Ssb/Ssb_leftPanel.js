import Ssb_subleft from './Ssb_subleft';
import ssb_data from './ssb_data';
import './Ssb.css';
// import { useState } from 'react';

const Ssb_leftpanel = (props) => {
    // const [subQuestionOpen, setSubQuestionOpen] = useState(false);
    return (
        <div className="leftPanel">
            {ssb_data.map((item) => {
                return (
                    <>
                        <div className={`sub-topic`} >
                            <Ssb_subleft moveup={(v) => { props.moveUp(v) }} items={item} subitems={item.subquestion} />
                        </div>
                    </>
                )
            })}
        </div>
    );
};

export default Ssb_leftpanel;