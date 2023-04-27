import React from 'react';
import { Button } from 'react-bootstrap';
import { FaBeer, FaGoogle, FaGithub,FaFacebook,FaTwitter,FaInstagram} from 'react-icons/fa';
import Qzone from '../Shared/QZone/Qzone';


const RightNav = () => {
    return (
        <div>
            <div>
                <h4>Log in with</h4>
                <Button className='mb-2' variant="outline-primary"><FaGoogle /> Log in with google</Button>
                <br />
                <Button variant="outline-secondary"><FaGithub /> Log in with github</Button>
            </div>
            <div className='mt-3'>
                <h4>Find us on</h4>
                <Button className='mt-2' variant="outline-primary">< FaFacebook/> Facebook</Button>
                <br />
                <Button className='mt-2' variant="outline-secondary">< FaTwitter/> Twitter</Button>
                <br />
                <Button className='mt-2' variant="outline-success">< FaInstagram/> Instagram</Button>
            </div>
            <Qzone></Qzone>
        </div>
    );
};

export default RightNav;