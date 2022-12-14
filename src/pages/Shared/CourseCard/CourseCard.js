import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { jsPDF } from "jspdf";



const CourseCard = ({news,checkout}) => {



const handlePdf=()=>{

  const doc=new jsPDF("landscape",'px','a4','false')

// doc.addImage(logoo,'PNG',65,20,500,400)

//doc.text(120,40,'We have more than 1000 videos on 6 topics.Learner can easily learn programming and take them into working environment.here we offer Js ,react,react native,python,mongo db.In near future we would offer more job focused course.')




// doc.text()
doc.save('a.pdf')
}



    return (
        <div className='' >
            
            <h3 className='fst-italic container'>{news.title} is our most demanding course.Most of our student liked this course.It's a job focused basic to advanced {news.name} course.</h3>
            
            
            <Card className='w-50 container mb-5 mt-5' >
            
            <Card.Header>{news.name}
            <Button className='w-50 ms-5' onClick={handlePdf}>Download Pdf</Button>
            
            </Card.Header>
            
      <Card.Img className='' variant="top" src={news.img} />
      <Card.Body>
        <Card.Title>{news.title}</Card.Title>
        
      </Card.Body>

      
      <Card.Body>
      {news.details}
      </Card.Body>

      <Card.Body>
      <h3>Topics:{news.topics}</h3>
      </Card.Body>




<div>

<Button className='w-25 ms-3 me-5 mb-3' variant="warning">{news.videos}</Button>
<Button className='w-25 me-5 mb-3' variant="warning">{news.quiz}</Button>
<Button className='w-25 me-5 mb-3' variant="warning">{news.assignment}</Button>

<h3 className='ms-3'>Price: {news.price}</h3>

</div>

<Button className='w-50' variant="warning"><Link to='/checkout'  >Get Premium</Link></Button> 
      



      




    </Card>
        </div>
    );
};

export default CourseCard;