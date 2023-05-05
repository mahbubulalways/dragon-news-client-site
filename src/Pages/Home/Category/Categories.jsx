import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../NewsCategory/NewsCard';
import useTitle from '../../../hooks/useTitle';

const Categories = () => {
    useTitle('')
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