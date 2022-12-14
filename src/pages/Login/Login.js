import React from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';

const Login = () => {

    const {signIn,signInWithGoogle,signInWithGit}=useContext(AuthContext)
    //const navigate=useNavigate()
    const navigate=useNavigate()

    const handleSubmit=event=>{

        event.preventDefault()
        const form=event.target
        const email=form.email.value 
        const password=form.password.value 
        console.log(email,password)
    
    signIn(email,password)
    .then(result=>{
    
    const user=result.user
    console.log('login:',user)
    form.reset()
    navigate('/')
    
    })
    
    .catch(error=>{
    
    console.error(error)
    
    
    })
    
    
    
    
    }


    const handleGoogleSignIn=()=>{

      signInWithGoogle()
      .then(result=>{
      
      const user=result.user
      
      console.log(user)
      
      })
      .catch(error=>console.error(error))
      
      
      }

const handleGitSignIn=()=>{

  signInWithGit()
  signInWithGoogle()
      .then(result=>{
      
      const user=result.user
      
      console.log(user)
      
      })
      .catch(error=>console.error(error))




}




    return (
        <div>
<h3 className='text-center text-success'>Please Login Now!!</h3>
<Form className='container w-50 border rounded' onSubmit={handleSubmit}>
           


      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control  name='email' type="email" placeholder="Enter email" required />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control  name='password' type="password" placeholder="Password" required />
      </Form.Group>
      <div>

      <Link to="/register"><button type="button" class="btn btn-link">Have you register?</button></Link>
      
      
      </div>
      <Button variant="primary" type="submit"  >
       Login
      </Button>



      <div>

      <button  onClick={handleGoogleSignIn}   type="button" className="mt-3 btn btn-secondary btn-lg">Login with Google</button>

      <button  onClick={handleGitSignIn}   type="button" className="mt-3 btn btn-secondary btn-lg ms-3">Login with Git</button>

      </div>


      
      
    </Form>




            
            
        </div>
    );
};

export default Login;