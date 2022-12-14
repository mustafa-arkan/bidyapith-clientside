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
import PrivateRoutes from "../routes/PrivateRoutes";




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
// loader:({params})=>fetch(`https://bidyapith-server.vercel.app/checkout/${params.id}`)


 },



 

{
path:'/category/:id',
element:<PrivateRoutes><Category></Category></PrivateRoutes>,
loader:({params})=>fetch(`https://bidyapith-server.vercel.app/category/${params.id}`)




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


},



]



},



{path:'*',element:<div className='align-items-center text-center'>404....Page not found!!!!</div>}


])