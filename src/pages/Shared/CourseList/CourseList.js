import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import CourseCard from '../../CourseCard/CourseCard';
import Courses from '../../Courses/Courses';

const CourseList = () => {
    return (
        <div>
            
<Courses></Courses>

<Container>

<Row>

<Col lg="2" className='d-none d-lg-block'>
  <h2>Leftside</h2>
</Col>

<Col lg="7">

<Outlet></Outlet>


</Col>




<Col lg="3">


<CourseCard></CourseCard>

</Col>



</Row>


            </Container>






            
        </div>
    );
};

export default CourseList;