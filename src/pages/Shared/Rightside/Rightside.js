import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Card from 'react-bootstrap/Card';






const Rightside = () => {

const [rights,setRights]=useState([])
useEffect(()=>{

    fetch('http://localhost:5000/news-categories')
    .then(res=>res.json())
    .then(data=>setRights(data))
    
    
    
    })




    return (

        <div>
 <h2 className='fs-3 fst-italic'><span className='text-warning'>Hey Buddy!!!</span>Here is the short intro of our <span className='text-warning'>premium courses</span>.There are total {rights.length} course.You can purchase them using your visa card.If you want to know details or purchase our courses please click on the leftside menu.</h2>

 {

rights.map(right=>
    
    
    <Card className='container mb-5 mt-5' key={right.id} >
            <Card.Header>{right.name}</Card.Header>
      <Card.Img className='' variant="top" src={right.img} />
      <Card.Body>
        <Card.Title>{right.title}</Card.Title>
        
      </Card.Body>
      
      <Card.Body>
      {right.details}
      </Card.Body>
      
    </Card>
    
    
    )


}
  
        </div>
    );
};

export default Rightside;