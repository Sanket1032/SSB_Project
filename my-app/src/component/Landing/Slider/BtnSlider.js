import leftArrow from '../../../image/left-arrow.svg';
import rightArrow from '../../../image/right-arrow.svg';
import './Slider.css';

const BtnSlider = ({direction, moveSlide}) => {
    return (
        <button onClick={moveSlide} className={direction === "next" ? "btn-slide next" : "btn-slide prev"}>
            <img src={direction === "next" ? rightArrow : leftArrow}></img>
        </button>
    );
};

export default BtnSlider;