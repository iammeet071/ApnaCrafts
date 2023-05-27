import React from 'react'
import {firebase,auth,provider} from '../firebase'
import './Auth.css'
const Auth = (props) => {
	const handleVendor=()=>{
		auth.signInWithPopup(provider)
        .then((result)=>{
            const newUser={
                name:result.user.displayName,
                photo:result.user.photoURL,
				uid:result.user.uid,
				userType:'vendor'
            }
            localStorage.setItem('user',JSON.stringify(newUser));
            props.setUser(newUser);
			firebase.firestore().collection('vendor').doc(result.user.uid)
				.set({
					email:result.user.email,
					vendorName:result.user.displayName,
				});
            
        })
        .catch((err)=>{
            alert(err.message);
        })
	}
	const handleUser=()=>{
		auth.signInWithPopup(provider)
        .then((result)=>{
            const newUser={
                name:result.user.displayName,
                photo:result.user.photoURL,
				userType:'user'
            }
            localStorage.setItem('user',JSON.stringify(newUser));
            props.setUser(newUser);
            firebase.firestore().collection('users').doc(result.user.uid)
				.set({
					email:result.user.email,
					name:result.user.displayName,
				});
        })
        .catch((err)=>{
            alert(err.message);
        })
	}
	return (
		<div className="container">
			<div className="sub">
				<img style={{width:300}} src="./logo.png"></img>
				<button onClick={handleUser} className="user">Sign in as User</button>
				<button onClick={handleVendor} className="vendor">Sign in as Vendor</button>
			</div>
		</div>
	)
}

export default Auth
