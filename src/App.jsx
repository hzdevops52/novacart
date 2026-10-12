import React, { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import CategorySection from './components/CategorySection.jsx';
import ProductSection from './components/ProductSection.jsx';
import CartDrawer from './components/CartDrawer.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  const [cartItems, setCartItems] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  function selectCategory(category) {
    setActiveCategory(category);
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  }

  function addToCart(product) {
    setCartItems((current) => {
      const existing = current.find((item) => item.id === product.id);

      if (existing) {
        return current.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...current, { ...product, quantity: 1 }];
    });
  }

  function updateQuantity(id, quantity) {
    if (quantity < 1) {
      setCartItems((current) => current.filter((item) => item.id !== id));
      return;
    }

    setCartItems((current) =>
      current.map((item) => item.id === id ? { ...item, quantity } : item)
    );
  }

  function removeFromCart(id) {
    setCartItems((current) => current.filter((item) => item.id !== id));
  }

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      <Navbar
        cartCount={cartCount}
        onCategorySelect={selectCategory}
        onCartClick={() => setCartOpen(true)}
        onSearch={(query) => {
          setSearchTerm(query);
          document.getElementById('products')?.scrollIntoView({
            behavior: 'smooth',
          });
        }}
      />

      <main id="home-page">
        <Hero />
        <CategorySection onSelectCategory={selectCategory} />
        <ProductSection
          onAdd={addToCart}
          searchTerm={searchTerm}
          selectedCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        <div id="deals" />
        <div id="account-info" />
      </main>

      <Footer />

      {cartOpen && (
        <CartDrawer
          items={cartItems}
          onClose={() => setCartOpen(false)}
          onQuantityChange={updateQuantity}
          onRemove={removeFromCart}
        />
      )}
    </>
  );
}
