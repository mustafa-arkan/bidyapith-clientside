import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';


import Leftside from '../Leftside/Leftside';
import Rightside from '../Rightside/Rightside';

const CourseList = () => {
    return (
        <div>
            


<Container>

<Row>

<Col lg="3" className='d-none d-lg-block'>
<Leftside></Leftside>
</Col>

{/* <Col lg="1">

<Outlet></Outlet>


</Col> */}




<Col lg="9">


<Rightside></Rightside>

</Col>



</Row>


            </Container>






            
        </div>
    );
};

export default CourseList;