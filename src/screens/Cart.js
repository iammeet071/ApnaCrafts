import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import './Cart.css';
import OrderBill from '../components/OrderBill';
// localStorage.setItem('total_price', price);
// localStorage.setItem('quantity', initialState);



const CartTotal = () => {
    const history = useHistory();
    let addeditems = JSON.parse(localStorage.getItem('cart'));

    let initialCount = 1;
    let [count, setcount] = useState(initialCount);
    let [price, setprice] = useState("");

 
    
    const RemoveItem = (e) =>{
        e.preventDefault();
        console.log(e.target.value);
        let removeid = e.target.value;
        addeditems.forEach(ad_item => {
            if(ad_item.id === removeid){
                let indx = addeditems.indexOf(ad_item); 
                addeditems.splice(indx,1);
            }
        }
        );
        localStorage.setItem('cart' , JSON.stringify(addeditems));

        console.log(addeditems);
        window.location.reload();
        
        // localStorage.clear();
        
    }
    
    
    
    const Increment = () => {
        setcount(count + 1);
        setprice(price * 2);
    }
    
    const Decrement = () => {
        if (count == 1)
        setcount(1);
        else {
            setcount(count - 1);
            setprice(price / 2);
        }
    }
    localStorage.setItem('quantity', count);
    
    


    return (
        <div className="Cart">
            <div className="title">
                <h3>Your Cart</h3>
            </div>

            <div className="Cart-Products">
                {
                    addeditems.map((add_item) => {
                        price = add_item.price;
                        return (
                            <div className="pr">
                                <div className='Product-Image'>
                                    <p className='heading'>ITEMS ADDED</p>
                                    <div className="">
                                        <img src={add_item.image} alt='p1' />
                                    </div>
                                </div>

                                <div className="P-Details">
                                    <p className='heading'>DETAILS</p>
                                    <div className="P-Properties">
                                        {/* <p><span>Style</span> : Western</p>
                                        <p><span>Size</span> : 20 </p>
                                        <p><span>Qty</span> : 200</p>
                                        <p><span>Design</span> : Western</p> */}
                                        <p>{add_item.description}</p>
                                    </div>
                                </div>

                                <div className="P-Quantity">
                                    <p className='heading'>QUANTITY</p>
                                    <div className='P-Box'>
                                        <img src='./plus.png' onClick={Increment}></img>
                                        <input type='number' value={count} />
                                        <img src='./minus.png' onClick={Decrement}></img>


                                    </div>
                                    <button value = {add_item.id} onClick = {RemoveItem}> Remove </button>
                                </div>

                                <div className="P-total-price">
                                    <p className='heading'>PRICE</p>
                                    <p>{`${price}`}</p>
                                </div>
                            </div>
                        )
                    })
                }


            </div>
            <OrderBill items={localStorage.getItem('cart')}/>
        </div>
    )

}

export default CartTotal;