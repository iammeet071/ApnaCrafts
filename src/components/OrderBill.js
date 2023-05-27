import React from 'react'
import './orderBill.css'
const OrderBill = ({items}) => {
	console.log(JSON.parse(items));
	items=JSON.parse(items);
	const totalSum = ()=>{
		let sum = 0;
		items.map((item)=>{
			sum = sum + parseInt(item.price);
		});
		return sum;
	}
	return (
		<div className="bill">
			<h3 className="bill-head">Cart Summary</h3>
			{items.map((item)=>{
				return <div className="products">
				<h3>{item.name}</h3>
				<p>Rs. {item.price}</p>
			</div>
			})}
			<hr/>
			<div className="subtotal">
			<p>Subtotal</p>
			<p>Rs. {totalSum()}</p>
			</div>
			<div className="subtotal">
			<p>Shipping</p>
			<p>Rs. 120 </p>
			</div>
			<div className="subtotal">
			<h3>Total</h3>
			<p><b>Rs. {totalSum()+120}</b></p>
			</div>
		</div>
	)
}

export default OrderBill
