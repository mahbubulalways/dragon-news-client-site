import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../NewsCategory/NewsCard';

const Categories = () => {
    const {id}=useParams()
    const categoryNews=useLoaderData()
    return (
        <div>
            {categoryNews.map(news=><NewsCard
            news={news}
            key={news._id}
            ></NewsCard>)}
        </div>
    );
};

export default Categories;