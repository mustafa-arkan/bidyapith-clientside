import React from 'react';
import {  Col, Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Faq from '../FAQ/Faq';
import Footer from '../footer/Footer';
import logoo from '../img/logooo.jpg'

import Leftside from '../Shared/Leftside/Leftside';


const Home = () => {
    return (
        <div className=''>
           


            <Container className='mb-3 mt-3'>

<Row>

<Col lg="7" className='bg-success p-2 text-dark bg-opacity-10 '>
{/* <Leftside></Leftside> */}

<h1 className='mt-5 me-5'>Bidyapith Academy</h1>
<p className='text-break me-5 '>Bidyapith Academy is an initiative taken by Bidyapith Academy, where we offer 1000+ free online courses in cutting-edge technologies and have successfully enrolled a whopping 5 Million+ learners across all domains. Bidyapith Academy covers courses on Data Science, Machine Learning, Artificial Intelligence, Cloud Computing, Software Development, Sales and Business Development, Digital Marketing, Big Data, and many more.</p>
<button type="button" className="btn btn-warning mb-5 mt-3">Get start now</button>

</Col>

{/* <Col lg="1">

<Outlet></Outlet>


</Col> */}




<Col lg="5"className='bg-success p-2 text-dark bg-opacity-10 '>



<img src="" alt="" className="src w-25" />
<Card.Img variant="top" src={logoo} className='w-100 h-100' />





</Col>



</Row>


            </Container>
{/* 2nd row start      */}

            <Container>

<Row>

<Col lg="3" className='bg-success p-2 text-dark bg-light '>
{/* <Leftside></Leftside> */}




<Leftside></Leftside>




</Col>

{/* <Col lg="1">

<Outlet></Outlet>


</Col> */}




<Col lg="9"className='bg-success p-2 text-dark bg-light '>




<CardGroup >
      <Card className='m-2'>
        <Card.Img variant="top" src="https://blog.logrocket.com/wp-content/uploads/2020/12/javascript-custom-events.png" className='w-100 h-75' />
        <Card.Body>
          <Card.Title>JavaScript</Card.Title>
          <Card.Text>
          Our Advanced JavaScript course by Bidyapith_Academy will take you from understanding the basics of JavaScript, to learning it to the point that you can teach it to others, impress co-workers, and wow future.
          </Card.Text>
        </Card.Body>
       
      </Card>

      <Card className='m-2'>
        <Card.Img variant="top" src="https://www.freecodecamp.org/news/content/images/size/w2000/2021/06/Ekran-Resmi-2019-11-18-18.08.13.png" className='w-100 h-75'/>
        <Card.Body>
          <Card.Title>React Js</Card.Title>
          <Card.Text>
          Our Advanced React course by Bidyapith_Academy will take you from understanding the basics of JavaScript&React to learning it to the point that you can teach it to others, impress co-workers, and wow future.
          </Card.Text>
        </Card.Body>
        
      </Card>


      
      <Card className='m-2'>
        <Card.Img variant="top" src="https://www.freecodecamp.org/news/content/images/size/w2000/2019/10/node-js-development-company.png" className='w-100 h-75' />
        <Card.Body>
          <Card.Title>Node js</Card.Title>
          <Card.Text>
          This Advanced Node js course by Bidyapith_Academy will take you from understanding the basics of Node js, to learning it to the point that you can teach it to others, impress coworkers, and wow future.
          </Card.Text>
        </Card.Body>
        
      </Card>
    </CardGroup>



    <CardGroup >
      <Card className='m-2'>
        <Card.Img variant="top" src="https://149695847.v2.pressablecdn.com/wp-content/uploads/2022/01/Python-programming-india.jpg" className='w-100 h-75' />
        <Card.Body>
          <Card.Title>Python</Card.Title>
          <Card.Text>
          Our Advanced Python course by Bidyapith_Academy will take you from understanding the basics of Python, to learning it to the point that you can teach it to others, impress coworkers, and wow future.
          </Card.Text>
        </Card.Body>
       
      </Card>

      <Card className='m-2'>
        <Card.Img variant="top" src="https://crowdbotics.ghost.io/content/images/size/w1000/2021/05/React-Native-Img.png" className='w-100 h-75'/>
        <Card.Body>
          <Card.Title>React native</Card.Title>
          <Card.Text>
          Our Advanced React Native course by Bidyapith_Academy will take you from understanding the basics ofReact Native, to learning it to the point that you can teach it to others, impress coworkers, and wow future.
          </Card.Text>
        </Card.Body>
        
      </Card>


      
      <Card className='m-2'>
        <Card.Img variant="top" src="https://miro.medium.com/max/1400/1*0lgunvVYa8gZ_sfMHflyvw.jpeg" className='w-100 h-75' />
        <Card.Body>
          <Card.Title>Mongo DB</Card.Title>
          <Card.Text>
          This Advanced Mongo DB course by Bidyapith_Academy will take you from understanding the basics of Mongo DB, to learning it to the point that you can teach it to others, impress coworkers, and wow future.
          </Card.Text>
        </Card.Body>
        
      </Card>
    </CardGroup>






</Col>



</Row>


            </Container>


<Faq></Faq>





<Footer ></Footer>


        </div>
    );
};

export default Home;