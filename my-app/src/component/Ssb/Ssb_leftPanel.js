import Ssb_subleft from './Ssb_subleft';
import ssb_data from './ssb_data';

const Ssb_leftpanel = () => {
    return (
        <div className="leftPanel">
            {ssb_data.map((item) => {
                return (
                    <>
                        <div className="main-topic">{item.question}</div>
                        <div className="sub-topic">
                            <Ssb_subleft subitems={item.subquestion} />
                            {/* {item.subquestion.map((element) => {
                                return (
                                    <li className="sub-question">{element.question1}</li>
                                    <Ssb_subleft element={element.question1} />
                                )
                            })} */}
                        </div>
                    </>
                )
            })}
        </div>
    );
};

export default Ssb_leftpanel;