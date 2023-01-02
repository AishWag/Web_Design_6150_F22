import React, { useState, useEffect} from 'react'
import axios from 'axios';

const FeaturedProjects = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = () => {
        axios
            .get('http://localhost:3000/fetch_property?city=Boston')
            .then((res) => {
                console.log(res.data);
                setProducts(res.data.products);
            })

            .catch((err) => {
                console.log(err);
            })
    }
  return (
    <div>
        <h1>FeaturedProjects</h1>
        <div className='item-container'>
            {
            products.map((product) => {
                console.log(product);
                return(
                <div className='card'>
                    <h3>{product.name}</h3>
                    <p>{product.Address}</p>
                </div>
                )
            })}
        </div>
    </div>
  )
}

export default FeaturedProjects