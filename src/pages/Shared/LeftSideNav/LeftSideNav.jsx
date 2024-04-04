import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {

    const [catagory,setCatagory]=useState([])

    useEffect(()=>{

        fetch('categories.json')
        .then(res=>res.json())
        .then(data=>setCatagory(data))
    },[])
    return (
        <div>
           <h2 className='text-3xl,'>All Category</h2> 
           {
            catagory.map(cat=> <Link
                to={`/cat/${cat.id}`}
                className='block ml-4 text-xl font semibold'
                 key={cat.id}>{cat.name}</Link>)
           }
        </div>
    );
};

export default LeftSideNav;