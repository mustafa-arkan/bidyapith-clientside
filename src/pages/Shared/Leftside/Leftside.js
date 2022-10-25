import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Leftside = () => {

const [categories,setCategories]=useState([])

useEffect(()=>{

fetch('http://localhost:5000/news-categories')
.then(res=>res.json())
.then(data=>setCategories(data))



})




    return (


        <div>
            <h2>left side:{categories.length}</h2>

<div>

{

categories.map(category=><p key={category.id}>


<Link to={`/news/${category.id}`}>{category.name}</Link>



</p>)




}





</div>






        </div>
    );
};

export default Leftside;