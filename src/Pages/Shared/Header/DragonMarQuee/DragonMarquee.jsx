import React from 'react';
import { Button } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
const DragonMarquee = () => {
    return (
        <div>
             <div className='d-flex align-items-center bg-secondary p-4'>
        <Button variant="danger">Breaking</Button>
        <Marquee className='' gradient={false} speed={50} pauseOnHover={true}>
        I can be a React component, multiple React components, or just some text Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, perferendis doloremque, provident debitis qui ullam odit repellendus reiciendis nisi, quaerat itaque accusamus totam dicta amet! Repellat facere dolores obcaecati quasi sit porro, aliquid voluptatibus consequatur ipsa, quidem, sequi fugiat perspiciatis recusandae mollitia animi. Fugit distinctio culpa, dicta modi vitae itaque.
     </Marquee>
        </div>
        </div>
    );
};

export default DragonMarquee;