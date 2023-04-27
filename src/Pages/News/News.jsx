import React from 'react';
import {  Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import { FaArrowLeft} from 'react-icons/fa'
import EditorInsight from './EditorInsight';
const News = () => {
    const news=useLoaderData()
    console.log(news);
    const { _id, image_url, details, title, category_id } = news
    return (
        <div>
          <Card >
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
         {details}
        </Card.Text>
       <Link to={`/category/${category_id}`} className='bg-danger text-decoration-none text-white p-2 rounded mt-0'><FaArrowLeft></FaArrowLeft>  All news in this category</Link>
      </Card.Body>
    </Card>
    <EditorInsight></EditorInsight>
        </div>
    );
};

export default News;