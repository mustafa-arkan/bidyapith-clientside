import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup';

const Faq = () => {
    return (
        <div className='container'>
            <h2 className='text-center'>Frequently Asked Question</h2>
            <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>What is Bidyapith Academy?</Accordion.Header>
        <Accordion.Body>
        Bidyapith Academy is an initiative taken by Bidyapith Academy, where we offer 1000+ free online courses in cutting-edge technologies and have successfully enrolled a whopping 5 Million+ learners across all domains. Bidyapith Academy covers courses on Data Science, Machine Learning, Artificial Intelligence, Cloud Computing, Software Development, Sales and Business Development, Digital Marketing, Big Data, and many more.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Why should I choose Bidyapith Academy for free courses with certificates?</Accordion.Header>
        <Accordion.Body>
        Bidyapith Academy is an excellent choice for free courses with certificates because of the high quality of the learning content. The courses are well-crafted, offer a great learning experience, and are interactive and engaging, making them ideal for learners in identifying what works best for their career goals.

Here are the benefits of choosing Bidyapith Academy for free training:

Industry-Relevant Curriculum: All the free courses offered by Bidyapith Academy include an industry-relevant curriculum, preparing learners for the jobs of tomorrow. Several industry experts have carefully crafted the course syllabus to ensure learners grasp all the essential skills and expertise.

Hands-on Demos: Hands-on demos are an incredible way for learners to understand technology. These courses include practical demonstrations of critical concepts to ensure learners gain hands-on experience of how the tool or technology works and apply it to real-world situations.

Live Sessions by Industry Experts: Few courses include live sessions taught by some of the world’s renowned industry experts. Learners can interact with our industry experts, ask questions, and gain insights into the latest industry trends. This feature is an excellent resource for those who want to stay up-to-date on the latest industry trends and learn from the best in the business.

Course Completion Certificates: Upon successfully completing any course, learners can secure certificates of completion from Bidyapith Academy, which they can showcase on renowned platforms like LinkedIn.
        </Accordion.Body>
      </Accordion.Item>



      <Accordion.Item eventKey="2">
        <Accordion.Header>What are the most popular free courses offered by Bidyapith Academy?</Accordion.Header>
        <Accordion.Body>
        Bidyapith Academy focuses on in-demand concepts and skills, where learners can develop industry-relevant knowledge in their chosen sector. It provides a wide range of courses in prestigious fields, assisting learners across the globe in achieving their professional goals.

Some of the most popular free courses offered by Bidyapith Academy that are in high demand today include:


Free Data Science Courses,
Free Artificial Intelligence Courses,
Free Machine Learning Courses,
Free Software Courses,
Free Cybersecurity Courses,
Free Cloud Computing Courses,
Free Management Courses,
Free Digital Marketing Courses,






        </Accordion.Body>
      </Accordion.Item>


      <Accordion.Item eventKey="3">
        <Accordion.Header>How can I enroll in these free online courses?</Accordion.Header>
        <Accordion.Body>
        You can click on the “Sign Up” button at the top-right of the page and register with your email address, or you can sign up using your Google Account. 

You can also install our Great Learning app from Google Play Store and Apple App Store and learn from your mobile.
        </Accordion.Body>
      </Accordion.Item>






    </Accordion>
    <p className='text-center'><small>For more information please contact us at arkancse@gmail.com</small></p>
        </div>
    );
};

export default Faq;