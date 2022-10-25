import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

import Leftside from '../Leftside/Leftside';
import Rightside from '../Rightside/Rightside';

const CourseList = () => {
    return (
        <div>
            


<Container>

<Row>

<Col lg="2" className='d-none d-lg-block'>
<Leftside></Leftside>
</Col>

<Col lg="7">

<Outlet></Outlet>


</Col>




<Col lg="3">


<Rightside></Rightside>

</Col>



</Row>


            </Container>






            
        </div>
    );
};

export default CourseList;