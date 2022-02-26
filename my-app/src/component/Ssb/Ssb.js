import './Ssb.css';
import { useState } from 'react';
import Ssb_leftPanel from './Ssb_leftPanel';
const Ssb = () => {
    const [answer, setAnswer] = useState("");
    const answerHandler = (value) => {
        setAnswer(value);
    }
    const data ="Indian army SSB interview is conducted by the army for the selection of male and female candidates who apply for the officer cadre of the Indian army. Lets first know the full form of SSB: Service Selection Board .Aim of SSB: To Select A Balanced Personality.In this article, we will be talking exclusively about the interview process of SSB. SSB is a five-day interview process which is conducted in two phases and is a mandatory process to go through if you aspire to join Indian defence forces.The first phase consists of an OIR(Officers intelligence ratings) test and picture perception and discussion test or the PPDT, while the in second phase interview, psychological as well as ground testing is done.SSB, in short, is a personality- based test.Male candidates can apply for it either after 12th(NDA or technical entries based on 12th class percentage) or graduation while female candidates can apply after graduation.Various ways to appear for an SSB after graduation is through CDSE, AFCAT, TGC entries.";
    return (
        <div className="ssb_Panel">
            <Ssb_leftPanel moveUp={answerHandler} />
            <div className="right_panel">{answer==="" ? data : answer}</div>
        </div>
    );
};

export default Ssb;