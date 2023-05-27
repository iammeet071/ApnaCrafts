import React from "react";
import { useState } from "react";
import { storage,firebase } from "../firebase";
import { useHistory } from 'react-router-dom'
import "./AddProduct.css";
import { useEffect } from "react";
const AddProduct = () => {
	const history = useHistory();
  const [name, setName] = useState("");
  const [area, setArea] = useState("");
  const [price, setPrice] = useState(0);
  const [desc, setDesc] = useState("");
  const [image,setImage] = useState(null);
  const [user,setUser] = useState({});
	useEffect(() => {
		setUser(JSON.parse(localStorage.getItem('user')))
	}, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
	const uploadTask = storage.ref(`images/${image.name}`).put(image);
	await uploadTask.on(
		"state_changed",
		snapshot=>{},
		error => {
			console.log(error);
		},
		() => {
			storage.ref("images")
			.child(image.name)
			.getDownloadURL()
			.then(url => {
				firebase.firestore().collection('products').add({
					description:desc,
					image:url,
					name:name,
					price:price,
					vendorId: user.uid,
					state:area
				}).then(
					history.push('/')
				);
				
			});
		}
	);

  };
  const handleChange = e =>{
	if(e.target.files[0])
	{
		setImage(e.target.files[0]);
		console.log(e.target.files[0]);
	}
  };
  return (
    <div>
      <form>
        <label>Enter Product name:</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="pname"
          type="text"
          id="pname"
          name="pname"
          placeholder="product name"
          required
        />
        <br />
        <label>Enter Product price (in Rs):</label>
        <input
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="price"
          type="number"
          id="price"
          name="price"
          placeholder="amount"
          required
        />
        <br />
		<label>Enter State:</label>
        <input
		value={area}
          type="text"
          className="price"
          name="state"
          placeholder="Enter State"
		  onChange={(e)=> setArea(e.target.value)}
          required
        />
		<br/>
        <label>Upload Product image:</label>
        <input
          type="file"
          className="image"
          id="image"
          name="image"
          placeholder="choose image"
		  onChange={handleChange}
          required
        />
        <br />

        <label>Enter Product description: </label>
        <br />
        <center>
          <textarea
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            name="description"
            id="description"
            cols="30"
            rows="10"
            placeholder="write description here.."
          ></textarea>
        </center>
        <br />
        <center>
          <input
            onClick={handleSubmit}
            className="addProduct"
            type="submit"
            value="Add Product"
          />
        </center>
      </form>
    </div>
  );
};

export default AddProduct;
