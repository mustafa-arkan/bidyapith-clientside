import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from '../Shared/Header/Header';
import CourseCard from '../Shared/CourseCard/CourseCard'


const Category = () => {
    
    <Header></Header>

    const allNews=useLoaderData()
    
    return (
        <div>
            

{/* <h2>this has: {allNews.length} </h2> */}
{

allNews.map(news=><CourseCard

key={news.id}

news={news}




></CourseCard>)



}












        </div>
    );
};

export default Category;