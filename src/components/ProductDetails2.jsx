import React, { useEffect, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'

const ProductDetails = () => {
  const {state} = useLocation();
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const params = useParams();

  const fetchData = () => {
    setIsLoading(true)
    setError(null)
    fetch("https://dummyjson.com/products/${id}")
    .then((res) => {
      if(!res.ok){
        throw new Error("Data could not be fetched")
      }
      return res.json();
    })
    .then((data) => {
      setProduct(data);
    })
    .catch(error => setError(error.message))
    .finally(() => setIsLoading(false))
  }
  
  useEffect(() => {
    fetchData();
  }, [])
  return (
    <div className='product-details'>
      <h2>Product Details</h2>
      {isLoading && <p>Products are loading...</p>}
      {error && <p>Error</p>}
      {!isLoading && !error &&  (
         <article className='product-details-article'>
              <div className='product-details-img'>
                <img className='product-details' src={state.images} alt="" />
              </div>
              <h3 className='product-details-title'><strong>Title: </strong>{state.title}</h3>
              <p><strong>Category: </strong>{state.category}</p>
              <p><strong>Price: </strong>{state.price}</p>
              <p><strong>Rating: </strong>{state.rating}</p>
              <p><strong>Brand: </strong>{state.brand}</p>
              <p><strong>Description: </strong>{state.description && state.description.substring(0,100)}...</p>
              <Link className='product-like' to="/products">Continue Shopping</Link>
          </article>
      )}
      
    </div>
  )
}

export default ProductDetails;