import DataSlider from './DataSlider';
import { useState } from 'react';
import './Slider.css';
import BtnSlider from './BtnSlider';

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(1);
    const nextSlide = () => {
        if (slideIndex !== DataSlider.length) {
            setSlideIndex(slideIndex + 1);
        }
        else if (slideIndex === DataSlider.length) {
            setSlideIndex(1);
        }
    };
    const prevSlide = () => {
        if (slideIndex !== 1) {
            setSlideIndex(slideIndex - 1);
        }
        else if (slideIndex === 1) {
            setSlideIndex(DataSlider.length);
        }
    };
    const moveDot = (index) => {
        setSlideIndex(index);
    }
    return (
        <div className="container-slider">
            {DataSlider.map((item, index) => {
                return (
                    <div key={item.id} className={slideIndex === index + 1 ? "slide active-anim" : "slide"}>
                        <img src={item.image}></img>
                        <p className="slide_quote">{item.quote}</p>
                    </div>
                )
            })}
            <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"} />

            <div className="container-dots">
                {Array.from({ length: DataSlider.length }).map((item, index) => (
                    <div onClick={() => moveDot(index + 1)} className={slideIndex === index + 1 ? "dot active" : "dot"}></div>
                ))}
            </div>
        </div>
    );
};

export default Slider;