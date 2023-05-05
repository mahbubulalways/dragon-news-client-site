import moment from 'moment';
import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaRegBookmark, FaShareAlt, FaEye, FaRegStar, FaStar,  } from 'react-icons/fa'
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
const NewsCard = ({ news }) => {
    const { _id, image_url, details, title, author, total_view, rating } = news
    return (
        <div className='mt-5'>
            <Card >
                <Card.Header className='d-flex p-2 gap-3 align-items-center'>
                    <Image style={{ height: "50px" }} className='' src={author.img} roundedCircle />
                    <div className='flex-grow-1'>
                        <h5 className='mb-0'>{author?.name}</h5>
                        <p>{moment(author?.published_date).format('YYYY-MM-D ')}</p>
                    </div>
                    <div>
                        <FaRegBookmark />
                        <FaShareAlt />
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img variant="top" src={image_url} />
                    <Card.Text>
                        {details.length < 250 ? <>{details}</> : <>{details.slice(0, 250)}...<Link className='text-decoration-none' to={`/news/${_id}`}>Read More</Link></>}
                    </Card.Text>

                </Card.Body>
                <Card.Footer className="text-muted d-flex">
                    <div className='flex-grow-1'>
                    <Rating  style={{ maxWidth: 150 }} value={rating.number}       readOnly/>
                        {/* <Rating
                            placeholderRating={rating.number}
                            readonly
                            emptySymbol={<FaRegStar></FaRegStar>}
                            placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                            fullSymbol={<FaStar></FaStar>}
                        /> */}
                        <span className='ms-2'> {rating.number}</span>
                    </div>
                    <p><FaEye></FaEye> {total_view}</p>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default NewsCard;