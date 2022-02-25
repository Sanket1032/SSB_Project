import ssb_data from './ssb_data';
import Ssb_leftPanel from './Ssb_leftPanel';
const Ssb = () => {
    return (
        <div className="ssb_Panel">
            <Ssb_leftPanel ssb_data={ssb_data}/>
            <div className="right_panel"></div>
        </div>
    );
};

export default Ssb;