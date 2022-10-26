import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Blog from "../pages/Blog/Blog";
import Category from "../pages/Category/Category";

import Faq from "../pages/FAQ/Faq";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import News from "../pages/News/News";
import Register from "../pages/Register/Register";
import Checkout from "../pages/Shared/Checkout/Checkout";

import CourseList from "../pages/Shared/CourseList/CourseList";




export const routes=createBrowserRouter([


{

path:'/',
element:<Main></Main>,

children:[
{
path:'/',
element:<Home></Home>


},

{
path:'/courselist',
element:<CourseList></CourseList>


},


{ 
    path:'/checkout',
 element:<Checkout></Checkout>
// loader:({params})=>fetch(`http://localhost:5000/checkout/${params.id}`)


 },




{
path:'/category/:id',
element:<Category></Category>,
loader:({params})=>fetch(`http://localhost:5000/category/${params.id}`)




},
{

    path:'/cards/:id',
    element:<News></News>


},
{
path:'/blog',
element:<Blog></Blog>


},
{

path:'/faq',
element:<Faq></Faq>

},

{

path:'/login',
element:<Login></Login>

},
{

path:'/register',

element:<Register></Register>


}







]



}












])