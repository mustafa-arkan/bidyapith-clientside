import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Blog from "../pages/Blog/Blog";
import CourseCard from "../pages/CourseCard/CourseCard";
import Courses from "../pages/Courses/Courses";
import Faq from "../pages/FAQ/Faq";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
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
path:'/courses/:id',
element:<Courses></Courses>

},
{

    path:'/cards/:id',
    element:<CourseCard></CourseCard>


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