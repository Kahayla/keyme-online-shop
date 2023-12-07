import { React, useEffect, useState } from "react";
import { checkout } from "./services/checkout";
import "./App.css";

// The function that makes the fetch request to the Products API
import { getProducts } from "./services/getProducts";

function App() {
  // use the products variable to read all of your products
  // and display them on your page
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const products = await getProducts();
      //console.log(products);
      setProducts(products);
    };
    loadData();
  }, []);

  return (
    <div className="container">
      {products.map((product) => (
        <div key={product.id} className="product-grid">
          <img src={product.images} alt={product.name} />
          <h2>{product.name}</h2>
          <p className="description">{product.description}</p>
          <p className="price">${product.prices[0].unit_amount / 100}</p>
          {/* I did have the following code in place "<button onClick={checkout(product.prices[0].id)}>Buy Now</button>" However the function was always running immediately, so I used callback-function which I found online, however I still don't understand why my first solution didn't work*/}
          <button
            onClick={() => {
              checkout(product.prices[0].id);
            }}
          >
            Buy Now
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
