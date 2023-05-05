import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LeftIcon from './LeftIcon';

const LeftNav = () => {
    const [data,setData]=useState([])
    useEffect(()=>{
        fetch('https://the-news-dragon-server-mahbubulalways.vercel.app/categories')
        .then(res=>res.json())
        .then(d=>setData(d))
        .catch(e=>console.log(e))

    },[])
    return (
        <div>
            <h4>All categories</h4>
           <div >
           {data.map(dt=>
            <h5  key={dt.id}><Link className='text-decoration-none text-black' to={`/category/${dt.id}`}>{dt.name}</Link></h5>)}
           </div>
           <LeftIcon></LeftIcon>
        </div>
    );
};

export default LeftNav;