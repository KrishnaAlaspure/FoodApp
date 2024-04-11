import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cards() {
  return (
    <>
    <Card className="mt-3" style={{ width: '18rem',"maxHeight":"360px" }}>
      <Card.Img variant="top" src="https://source.unsplash.com/random/100×80/?pizza" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <div className='continer w-100'>
          <select className='m-2 h-100 bg-success rounded'>
          {Array.from(Array(6),(e,i)=>{
          return(<option key={i+1} value={i+1}>{i+1}</option>)})}
          </select>
          <select className='m-2 h-100  bg-success rounded'>
          <option value="half">Half</option>
          <option value="full">Full</option>
          </select>
          <div className='d-inline fs-5' >Price</div>
        </div>
        
      </Card.Body>
    </Card>
    </>
  )
}

export default Cards
