import React from "react";
import { Switch, Route } from "react-router-dom";
import Products from "./screens/Products";
import AddProduct from "./screens/AddProduct"
import ProdDetails from "./screens/ProdDetails";
import Profile from "./screens/Profile";
import Homepage from "./screens/Homepage";
import Auth from "./screens/Auth";
import {auth} from './firebase'
import { useState } from "react";
import Navbarr from "./components/Navbar";
import Cart from "./screens/Cart"

function App() {
	const [user,setUser]=useState(JSON.parse(localStorage.getItem('user')));
	const signOut=()=>{
	  auth.signOut().then(()=>{
		localStorage.removeItem('user');
		setUser(null);
	  })
	}
  return (
	  <>
    <Switch>

	{
		!user ?
		<Auth setUser={setUser}/>
		:
		<>
		<Navbarr user={user.userType} signOut={signOut} />
		<Route exact path="/" component={Homepage} />
      <Route exact path="/products" component={Products} />
	  <Route path="/products/:state" component={Products} />
	  <Route path="/addProduct" component={AddProduct} />
	  <Route path="/details/:id" component={ProdDetails} />
	  <Route path="/profile" component={Profile} />
	  <Route path="/cart" component={Cart} />

		</>
	}

    </Switch>
	</>
  );
}

export default App;
