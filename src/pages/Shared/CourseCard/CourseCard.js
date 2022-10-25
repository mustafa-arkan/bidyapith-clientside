import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


const CourseCard = ({news}) => {
    return (
        <div>
            
            <Card className='w-50 container mb-5 mt-5' >
            <Card.Header>{news.name}</Card.Header>
      <Card.Img className='' variant="top" src={news.img} />
      <Card.Body>
        <Card.Title>{news.title}</Card.Title>
        
      </Card.Body>
      
      <Card.Body>
      {news.details}
      </Card.Body>
      <Button className='w-50' variant="warning">Get Premium Access</Button>
    </Card>
        </div>
    );
};

export default CourseCard;