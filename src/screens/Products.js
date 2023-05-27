import React from "react";
import Navbar from "../components/Navbar";
import "./Homepage.css";
import HomeCard from "../components/HomeCard";
import { firebase } from "../firebase";
import { useEffect, useState } from "react";

const Products = (props) => {
  const [products, setProducts] = useState([]);
  const [ogProds, setOgProds] = useState([]);
  const [filter, setFilter] = useState("");
  const [loading, setLoading] = useState(false);
  const ref = firebase.firestore().collection("products");
  const [cart, setCart] = useState([]);
  const filterProds = () => {
    console.log(filter);
    setProducts(
      ogProds.filter((item) => {
        return item.state === filter;
      })
    );
  };
  useEffect(() => {
    const state = props.match.params.state;
    getProducts(state);
  }, []);
  useEffect(() => {}, [products]);
  const addToCart = (e) => {
    let item;
    products.map((p) => {
      if (p.id === e.target.id) {
        item = p;
      }
    });
    setCart([item].concat(cart));
    const totalitems = [item].concat(cart);
    localStorage.setItem("cart", JSON.stringify(totalitems));
  };
  if (loading) {
    return <h1>Loading...</h1>;
  }

  const getProducts = (state) => {
    let cartItems = localStorage.getItem("cart");
    if (cartItems !== null) {
      setCart(JSON.parse(localStorage.cart));
    }
    ref.get().then((query) => {
      const items = [];
      query.forEach((doc) => {
        const obj = {
          ...doc.data(),
          id: doc.id,
        };
        items.push(obj);
      });
      if (state !== null) {
        setFilter(state);
        setProducts(
          items.filter((item) => {
            return item.state === state;
          })
        );
        setOgProds(items);
      } else {
        setProducts(items);
        setOgProds(items);
      }

      setLoading(false);
    });
  };

  return (
    <>
      <div className="wholebody">
        <div className="filterdiv">
          <div className="filters" style={{ display: "flex" }}>
            <h3>Select State</h3>

            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              id="states"
            >
              <option value="assam">Assam</option>
              <option value="kerala">Kerala</option>
              <option value="maharashtra">Maharashtra</option>
              <option value="punjab">Punjab</option>
              <option value="rajasthan">Rajasthan</option>
            </select>
          </div>
		  <button className="filterbtn" onClick={(e) => filterProds()}>
            Apply Filters
          </button>
          <button className="filterbtn" onClick={(e) => setProducts(ogProds)}>
            Reset Filters
          </button>
        </div>

        <div className="rightbody">
          <div className="cardsss">
            {products.map((prod) => (
              <HomeCard addToCart={addToCart} key={prod.id} product={prod} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
