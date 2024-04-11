import Carousel from 'react-bootstrap/Carousel';
import Form from 'react-bootstrap/Form';
import React from 'react';
import '../App.css'

function CarouselItem() {
  return (
    
    <div className='carouseldiv'> 
      <Carousel fade style={{ objectFit: "contain !important" }} >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://source.unsplash.com/random/300x100/?fries"
            alt="First slide" 
          />
          <Carousel.Caption>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control type="text" placeholder="search" />
                <button className='btn btn-online-success text-white bg-success ' type='submit'>Search</button>
              </Form.Group>
            </Form>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 "
            src="https://source.unsplash.com/random/300x100/?pizza"
            alt="Second slide"
          />
          <Carousel.Caption>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control type="text" placeholder="search" />
                <button className='btn btn-online-success text-white bg-success ' type='submit'>Search</button>
              </Form.Group>
            </Form>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://source.unsplash.com/random/300x100/?burger"
            alt="Third slide"
          />
          <Carousel.Caption>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

                <Form.Control type="text" placeholder="search" />
                <button className='btn btn-online-success text-white bg-success ' type='submit'>Search</button>
              </Form.Group>
            </Form>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselItem;