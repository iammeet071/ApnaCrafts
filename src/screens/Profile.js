import React from 'react'
import { useEffect, useState } from "react";
import Navbarr from '../components/Navbar'
import './Profile.css'
import {firebase} from '../firebase'
import OrderBill from '../components/OrderBill';
const Profile = () => {
	const [profile,setProfile] = useState({});
	useEffect(()=> {
		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
			  console.log(user.uid);
			  setProfile(user);
			} else {
				console.log("No logged in user");
			}
		  });
	}, []);

	return (
		<>
		<div className="profile">
		<img src={profile.photoURL} alt="profile" className="profile_image"/>
		<div className="profile_name"> <span>{profile.displayName}</span></div>
		<div className="email"> <span>{profile.email}</span></div>
		<div className="address"> <span>B/105, Star Apartment, Shripal Complex, Virar(west), 401303</span></div>
	</div>

	</>
	)
}

export default Profile
