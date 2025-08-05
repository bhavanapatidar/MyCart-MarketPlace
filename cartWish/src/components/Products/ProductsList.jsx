import React from 'react'
import './ProductsList.css';
import ProductCard from './ProductCard';

const ProductsList = () => {
  return (
        <section className='products_list_section'>
            <header className="align_center products_list_header">
                <h2>Products</h2>
                <select name="sort" id="" className='products_sorting'>
                    <option value="">Relevance</option>
                    <option value="price_low_to_high">Price: Low to High</option>
                    <option value="price_high_to_low">Price: High to Low</option>
                    <option value="rate desc">Rate: High to Low</option>
                    <option value="rate asc">Rate: Low to High</option>
                </select>
            </header>
            <div className="products_list">
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>

            </div>
        </section>
  )
}

export default ProductsList