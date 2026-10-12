import React from 'react';
import { useState } from 'react';
import {
  ShoppingBag,
  Search,
  UserRound,
  Menu,
  X,
  ChevronDown,
} from 'lucide-react';
import '../styles/navbar.css';

const navigation = [
  { label: 'All Products', href: '#products', category: 'all' },
  { label: 'Fashion', href: '#products', category: 'fashion' },
  { label: 'Electronics', href: '#products', category: 'electronics' },
  { label: 'Home & Living', href: '#products', category: 'home' },
  { label: 'Accessories', href: '#products', category: 'accessories' },
];

export default function Navbar({
  cartCount = 0,
  onSearch,
  onCartClick,
  onCategorySelect,
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  function handleSearch(event) {
    event.preventDefault();
    onSearch?.(searchQuery.trim());
  }

  function closeMobileMenu() {
    setMobileMenuOpen(false);
  }

  return (
    <header className="store-header">
      <div className="announcement-bar">
        <p>
          Welcome to NovaCart
          <span className="announcement-divider">·</span>
          Everyday shopping, made simple.
        </p>
      </div>

      <div className="store-header-main">
        <div className="store-header-inner">
          <button
            className="mobile-menu-toggle"
            type="button"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((open) => !open)}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          <a
            className="store-logo"
            href="#home-page"
            aria-label="NovaCart homepage"
            onClick={closeMobileMenu}
          >
            <span className="store-logo-icon">
              <ShoppingBag size={22} strokeWidth={2.2} />
            </span>
            <span className="store-logo-name">
              Nova<span>Cart</span>
            </span>
          </a>

          <form className="store-search" role="search" onSubmit={handleSearch}>
            <Search size={19} aria-hidden="true" />
            <input
              type="search"
              placeholder="Search products..."
              aria-label="Search products"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
            />
            <button type="submit">Search</button>
          </form>

          <div className="store-header-actions">
            <button
              className="store-action account-action"
              type="button"
              aria-label="Account"
              title="Account"
              onClick={() => {
                document.getElementById('account-info')?.scrollIntoView({
                  behavior: 'smooth',
                });
              }}
            >
              <UserRound size={21} strokeWidth={1.8} />
              <span>Account</span>
            </button>

            <button
              className="store-action cart-action"
              type="button"
              aria-label={`Shopping cart, ${cartCount} items`}
              onClick={() => onCartClick?.()}
            >
              <span className="cart-icon-wrap">
                <ShoppingBag size={22} strokeWidth={1.8} />
                <span className="cart-count">{cartCount}</span>
              </span>
              <span>Cart</span>
            </button>
          </div>
        </div>
      </div>

      <nav
        className={`store-category-nav${mobileMenuOpen ? ' is-open' : ''}`}
        aria-label="Main navigation"
      >
        <div className="store-category-nav-inner">
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => {
                if (item.category) onCategorySelect?.(item.category);
                closeMobileMenu();
              }}
            >
              {item.label}
            </a>
          ))}

          <a
            className="store-deals-link"
            href="#products"
            onClick={() => {
              onCategorySelect?.('all');
              closeMobileMenu();
            }}
          >
            Today's Deals
          </a>
        </div>
      </nav>

      <div className="mobile-search">
        <form className="store-search" role="search" onSubmit={handleSearch}>
          <Search size={19} aria-hidden="true" />
          <input
            type="search"
            placeholder="Search products..."
            aria-label="Search products"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
          />
          <button type="submit" aria-label="Submit product search">
            <Search size={18} />
          </button>
        </form>
      </div>
    </header>
  );
}
