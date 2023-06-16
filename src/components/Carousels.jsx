import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Banner from "../assest/img/banner/banner1.jpg"
import Slide from "../assest/img/banner/banner2.jpg"

function Carousels() {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
    return (
        <>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Banner}
                        alt="First slide"
                    />
                    
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Slide}
                        alt="Second slide"
                    />

                    
                </Carousel.Item>
                
            </Carousel>
        </>
    )
}
export default Carousels;