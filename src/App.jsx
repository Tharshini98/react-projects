
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import ProductList from "./ProductList";
import CartModal from "./CartModal";

let App = () => {
  let [products, setProducts] = useState([]);
  let [cartItems, setCartItems] = useState(() => {
    let stored = localStorage.getItem("cartItems");
    return stored ? JSON.parse(stored) : [];
  });
  let [isCartOpen, setIsCartOpen] = useState(false);
  let [searchTerm, setSearchTerm] = useState("");
  let [loading, setLoading] = useState(false);
  let [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch products");
        return res.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  let addToCart = (product) => {
    let exists = cartItems.find((item) => item.id === product.id);
    if (exists) {
      alert("Item already added to the cart");
      return;
    }
    setCartItems([...cartItems, product]);
  };

  let removeFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  let filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar
        cartCount={cartItems.length}
        onCartClick={() => setIsCartOpen(true)}
        searchTerm={searchTerm}
        onSearchChange={(e) => setSearchTerm(e.target.value)}
      />

      {loading && <p className="text-center mt-10">Loading products...</p>}
      {error && (
        <p className="text-center mt-10 text-red-500">Error: {error}</p>
      )}

      {!loading && !error && (
        <ProductList products={filteredProducts} addToCart={addToCart} />
      )}

      {isCartOpen && (
        <CartModal
          cartItems={cartItems}
          onClose={() => setIsCartOpen(false)}
          removeFromCart={removeFromCart}
        />
      )}
    </div>
  );
};

export default App;

