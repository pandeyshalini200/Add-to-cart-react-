import React, { useContext, useState } from 'react';
import faker from 'faker';
import { Cart } from '../Context';
import SingleProduct from './SingleProduct';
import './styles.css';

faker.seed(100);

const Home = () => {
    
    console.log(useContext(Cart));

    const productsArray=[...Array(20)].map(()=>({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.random.image(),
    }));

    const [products] = useState(productsArray);
    
  return (
    <div className='productContainer'>
        {products.map((prod => (
        <SingleProduct prod={prod} key={prod.id} />
    )))}
    </div>
  )
}

export default Home