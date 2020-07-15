import React from 'react'
import './Product.css'

function Product({ id, title, price, image, rating }){
    const addToBasket = () => (
    	console.log('addToBasket')

    );

	return (
		<div className="product">
			<div className="product__info">
				<p>{title}</p>
				<p className='product__price'>
					<small>₹</small>
					<strong>{price}</strong>
				</p>
				<div className='product__rating'>
					{Array(rating)
						.fill()
						.map((_) => (
								<span aria-label='image' role="img">🌟</span>
							))}
				</div>
			</div>
			<img src={image} alt='' />
			<button onClick={addToBasket}>Add to cart</button>
		</div>
	);
}

export default Product