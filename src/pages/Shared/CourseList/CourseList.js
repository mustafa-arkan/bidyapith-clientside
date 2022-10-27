import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Footer from '../../footer/Footer';


import Leftside from '../Leftside/Leftside';
import Rightside from '../Rightside/Rightside';

const CourseList = () => {
    return (
        <div>
            


<Container>

<Row>

<Col lg="3" className=''>
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



<Footer></Footer>


            
        </div>
    );
};

export default CourseList;