import React from 'react'
import "./Homepage.css";
import SimpleImageSlider from "react-simple-image-slider";
import { useHistory } from 'react-router-dom'
const Homepage = () => {
	const history = useHistory();
	const handleClick = (e)=>{
		history.push(`/products/${e.target.id}`)
	}

	const images = [
		{
		  url: "https://cdn.shopify.com/s/files/1/0030/9759/1872/files/Desktop_Banners___Lot_205___Bhavya_5.png?v=1619187367",
		},
		{
		  url: "https://cdn.shopify.com/s/files/1/0030/9759/1872/files/EL_Luxury_logo_and_banner.png?v=1621436830",
		},
		{
		  url: "https://cdn.shopify.com/s/files/1/0030/9759/1872/files/LOT_208_P_3.png?v=1625134138",
		},
		{
		  url: "https://cdn.shopify.com/s/files/1/0030/9759/1872/files/New_Design_-_Desktop_Banners_Piyush_b71d0fac-946d-423d-951f-7254aef74299.png?v=1624256227",
		},
		{
		  url: "https://cdn.shopify.com/s/files/1/0030/9759/1872/files/Lot_206_-_Bee_Desktop_Banner_1.png?v=1623824304",
		},
	  ];

	const states = [
		{
			name: "assam",
			src:  "img1.jpg",
		},
		{
			name: "kerala",
			src:  "img2.jpg",
		},
		{
			name: "maharashtra",
			src:  "img3.jpg",
		},
		{
			name: "punjab",
			src:  "img4.jpg",
		},
		{
			name: "rajasthan",
			src:  "img5.jpg",
		}
	]
	return (
		<div className='home-page'>
        <SimpleImageSlider
          width="100%"
          height={434}
          images={images}
          navStyle={1}
          showNavs={true}
          showBullets={true}
        />
        <div className='home-description'>
          <h1>
            <center>Handicrafts of India</center>{" "}
          </h1>
          <p>
            Comfort is an online craft brand with a vision to promote Indian
            handicrafts globally & help small artisans based in different parts
            of India earn a living out of it. Amazing Traditional Indian
            Handicrafts You will Love.
          </p>
        </div>
        <div className='home-state-products'>
          <center>
            <h1>State wise Handicraft Items</h1>
          </center>
          <div className='home-state-images'>
		  {
			  states.map((s)=>{
				  return <img key={s.name} onClick={handleClick} className="imgstate" id={s.name} src={s.src}></img>
			  })
		  }
          </div>
        </div>
      </div>
	)
}

export default Homepage