import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function CarouselFadeExample() {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    style={{ height: 590, objectFit: "fill" }}
                    src="/Images/jaipur-rajasthan.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    style={{ height: 590, objectFit: "fill" }}
                    src="/Images/elephant.jpg"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    style={{ height: 590, objectFit: "fill" }}
                    src="/Images/saree.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3 style={{color:'black',fontWeight:'300'}}>Elegant Sarees</h3>n
                    <p style={{color:'#040406'}}>
                        Embracing the timeless elegance of the six yards.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    style={{ height: 590, objectFit: "fill" }}
                    src="/Images/handweaving.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Fourth slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    style={{ height: 590, objectFit: "fill" }}
                    src="/Images/pot.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Fifth slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselFadeExample;
