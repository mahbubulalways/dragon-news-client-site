import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h1>Our terms and condition</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, aperiam quo. Omnis veritatis, optio rerum odit adipisci nemo, sint alias in fugiat deleniti, delectus nam eaque! Commodi fuga quibusdam vel? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi excepturi laborum sint iste nesciunt, recusandae dolore eligendi corrupti dolorem veniam esse beatae tempora fugiat perferendis enim velit quam ratione totam aliquid. Maiores quasi eligendi odio cupiditate dolor fuga quibusdam, nostrum corrupti aperiam alias officia hic accusamus rem eum vitae ex suscipit porro. Consectetur, officiis adipisci excepturi odit repellendus accusamus et nisi temporibus sed ea praesentium qui quaerat commodi totam necessitatibus!</p>
            <p> <Link to='/register'>Go back</Link></p>
        </div>
    );
};

export default Terms;