import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider'
import { getBasketTotal } from './reducer'


function Subtotal(){
	const [{ basket }, dispatch] = useStateValue();

	return (
		<div className="subtotal">
			{/* Price */}

			<CurrencyFormat

				renderText={(value) => (
					<div>
						<p>
							Subtotal ({basket.length} items): <strong>{value}</strong>
						</p>
						<small className='subtotal__gift'>
							<input type='checkbox' /> This order contains a gift
						</small>
					</div>
				)}
				decimalScale={2}
				value={getBasketTotal(basket)}
				displayType={'text'}
				thousandSeparator={true}
				prefix={'₹ '}
			/>
			<button onClick={checkoutMsg}>Proceed to Checkout</button>			
		</div>
	);
}

function checkoutMsg(){
	alert('Your order is placed!')
	window.location = '/'
}


export default Subtotal