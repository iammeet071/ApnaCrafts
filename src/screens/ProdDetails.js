import React from 'react'
import { useEffect,useParams } from 'react';
import './ProdDetails.css'
import FlashOnIcon from "@material-ui/icons/FlashOn";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import firebase from 'firebase';
import SimpleImageSlider from "react-simple-image-slider";
import { useState } from 'react';
import Navbarr from '../components/Navbar';

const ProdDetails = (props) => {
	const [data,setData] = useState({});
	useEffect(() => {
		const id = props.match.params.id;
		console.log(id);
		firebase.firestore().collection('products').doc(id).get().then((doc)=>{
			if(doc.exists)
			{
				console.log(doc.data);
				setData(doc.data());
			}
		})
	}, []);

	const images = [
		{
		  url: data.image,
		},
		{
		  url: "https://img3.exportersindia.com/product_images/bc-full/dir_8/222497/marble-handicraft-item-flower-vase-130822.jpg",
		},
	  ];

	return (
		<>
		<div className='product-page'>
        <div className='product-slider'>
		<img style={{width:440,borderRadius:20}} src={data.image}></img>
        </div>
        <div className='products'>
          <div className='product-details'>
            <h1>{data.name}</h1>
            <h3>₹{data.price}</h3>
            <h2>Details</h2>
            <ul>
              <li>- Lorem ipsum dolor sit amet.</li>
              <li>
                - Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit.
              </li>
              <li>
                - Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos
                rerum sint officiis.
              </li>
            </ul>
            <div className='product-desription'>
              <h2>Description</h2>
              <p>
                {data.description}
              </p>
            </div>
            <div className='product-services'>
              <h4>Services</h4>
              <ul>
                <li>- Lorem ipsum dolor sit amet.</li>
                <li>
                  - Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Odit.
                </li>
                <li>
                  - Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Quos rerum sint officiis.
                </li>
              </ul>
            </div>

            <div className='product-buttons'>
              <button className='add-cart'>
                <ShoppingCartIcon className='add-cart-icon' /> Add to cart
              </button>
              <button className='buy-now'>
                <FlashOnIcon className='buy-now-icon' /> Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
	  </>
	)
}

export default ProdDetails

