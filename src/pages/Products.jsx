import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Pagination from '../components/Users/Pagination';
import Search from '../components/Search';
import Sort from '../components/Sort';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // pagination
  const itemsPerPage = 12;
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  // serach
  const [searchTerm, setSearchTerm] = useState("");

  // sort
  const [sortCriteria, setSortCriteria] = useState("");

  const fetchData = (currentPage, searchTerm, sortCriteria) => {
    setIsLoading(true)
    setError(null);

    let url = `https://dummyjson.com/products?limit=${itemsPerPage}&skip=${(currentPage - 1) * itemsPerPage}`;
    if(searchTerm != ""){
      url = `https://dummyjson.com/products/search?q=${searchTerm}&limit=${itemsPerPage}&skip=${(currentPage - 1) * itemsPerPage}`;
    }
    if(sortCriteria){
      const spiltSortCriteria = sortCriteria.split('-');
      url += `&sortBy=${spiltSortCriteria[0]}&order=${spiltSortCriteria[1]}`
    }
    fetch(url)
    .then((res) => {
      if(!res.ok){
        throw new Error("Data could not be fetched")
      }
      return res.json();
    })
    .then((data) => {
      setProducts(data.products);
      // setIsLoading(false);
      console.log(currentPage)
      setTotalPages(Math.ceil(data.total/itemsPerPage));
    })
    .catch(error => setError(error.message))
    .finally(() => setIsLoading(false))
  }
  
  useEffect(() => {
    fetchData(currentPage, searchTerm, sortCriteria);
  }, [currentPage, searchTerm, sortCriteria])

  // const handleCurrentPage = (index) => {
  //   setCurrentPage(index + 1);
  // }
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1) // reset to first page
  }
  const handleSortChange = (event) => {
    setSortCriteria(event.target.value)
  }
  // search in the same page
  // const filterProducts = products.filter(
  //   (product) => product.title.toLowerCase().includes(searchTerm.toLowerCase())
  // );


  return (
    <div className='products-continer'>
      <h2>All Products</h2>
      <div className="search-sort">
        <Search searchTerm={searchTerm} onHandleSearchChange={handleSearchChange} />
        <Sort sortCriteria={sortCriteria} onHandleSortChange={handleSortChange} />
      </div>
      {isLoading && <h2 className='loading-text'>Products are loading...</h2>}
      {error && <p>Error</p>}
      {!isLoading && !error && (
        <>
          <section className='products'>
            {products &&
            products.length > 0 &&
            products.map((product) => {
              const {id, title, description, price, category, images} = product;
              return (
                <article key={id} className='product'>
                  <img className='product-image' src={images} alt={title} />
                    <h3>{title}</h3>
                    <p>{category}</p>
                    <p>Price: {price}$</p>
                    <p>{description && description.substring(0,100)}...</p>
                    <Link className='product-like' to={`/products/${id}`} state={product}>Show Details</Link>
                </article>
              )
            })}
          </section>
          
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onHandleCurrentPage={setCurrentPage}
          />
        </>
      )}
    </div>
  )
}

export default Products