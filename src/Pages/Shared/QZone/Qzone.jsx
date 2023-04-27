import React from 'react';
import QZone1 from '../../../assets/qZone1.png'
import QZone2 from '../../../assets/qZone2.png'
import QZone3 from '../../../assets/qZone3.png'
import bg from '../../../assets/bg.png'

const Qzone = () => {
    return (
        <div>
            <div className='mt-3 bg-secondary p-2 '>
            <h4>Q-Zone</h4>
            <div className='text-center mt-2 '>
                <img src={QZone1} alt="" />
                <img src={QZone2} alt="" />
                <img src={QZone3} alt="" />
            </div>
        </div>
        <div>
        <img src={bg} alt="" />
        </div>
        </div>
    );
};

export default Qzone;