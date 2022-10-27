import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';


const Blog = () => {
    return (
        <div className='container mt-5'>
            <h2 className='mb-5 text-bold fs-1 fst-italic text-center'><span className='text-warning'>Hey</span>,we are <span className='text-success'>Bidyapith</span>,see our thought,stories,ideas,blogs!!!</h2>
            <CardGroup >
      <Card className='m-2'>
        <Card.Img variant="top" src="https://images.ctfassets.net/nx13ojx82pll/60miWU6vSisC1N2IgQRPkt/61066f84608375c590b6dcb68fb47dc0/nodejs-cors-guide-what-it-is-and-how-to-enable-it-picture-1.png?w=1744&h=982&q=80&fm=webp" className='w-100 h-75' />
        <Card.Body>
          <Card.Title>What is CORS?</Card.Title>
          <Card.Text>
          Node.js is an open-source and cross-platform runtime used when executing JavaScript code on the server-side. One of the popular Node.js server frameworks is Express. Implementing CORS in Node.js helps you access numerous functionalities on the browser.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 7 mins ago</small>
        </Card.Footer>
      </Card>

      <Card className='m-2'>
        <Card.Img variant="top" src="https://firebase.google.com/images/social.png" className='w-100 h-75'/>
        <Card.Body>
          <Card.Title>Why are you using firebase? What other options do you have to implement authentication?</Card.Title>
          <Card.Text>
          Firebase helps you develop high-quality apps, grow your user base, and earn more money. Each feature works independently, and they work even better together.<br/>
          Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.


          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 1hr ago</small>
        </Card.Footer>
      </Card>


      
      <Card className='m-2'>
        <Card.Img variant="top" src="https://res.cloudinary.com/practicaldev/image/fetch/s--sbmJX9BV--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/d2kflp5t0kl302gfq567.jpg" className='w-100 h-75' />
        <Card.Body>
          <Card.Title>How does the private route work?</Card.Title>
          <Card.Text>
          The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 days ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>





    
    <Card className='m-2 mb-5'>
        <Card.Img variant="top" src="https://res.cloudinary.com/practicaldev/image/fetch/s--sbmJX9BV--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/d2kflp5t0kl302gfq567.jpg" className='w-100 h-75' />
        <Card.Body>
          <Card.Title>What is Node? How does Node work?</Card.Title>
          <Card.Text>
          It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
          <br/>
          Node is completely event-driven. Basically the server consists of one thread processing one event after another. A new request coming in is one kind of event. The server starts processing it and when there is a blocking IO operation, it does not wait until it completes and instead registers a callback function.

          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 2 months ago</small>
        </Card.Footer>
      </Card>
        </div>
    );
};

export default Blog;