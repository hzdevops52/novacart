import React, { useEffect, useMemo, useState } from 'react';
import {
  ArrowDownUp,
  Check,
  Heart,
  Search,
  ShoppingBag,
  SlidersHorizontal,
  Star,
  X,
  ZoomIn,
} from 'lucide-react';
import { categories, products, formatPrice } from '../data/products.js';
import '../styles/products.css';

export default function ProductSection({
  onAdd,
  searchTerm = '',
  selectedCategory = 'all',
  onCategoryChange,
}) {
  const activeCategory = selectedCategory;
  const setActiveCategory = onCategoryChange || (() => {});
  const [sortBy, setSortBy] = useState('featured');
  const [search, setSearch] = useState('');
  const [wishlist, setWishlist] = useState([]);
  const [quickView, setQuickView] = useState(null);
  const [addedId, setAddedId] = useState(null);

  useEffect(() => {
    setSearch(searchTerm);
  }, [searchTerm]);

  const filteredProducts = useMemo(() => {
    let result = products.filter((product) => {
      const matchesCategory =
        activeCategory === 'all' || product.category === activeCategory;
      const term = search.trim().toLowerCase();
      const matchesSearch =
        !term ||
        product.name.toLowerCase().includes(term) ||
        product.description.toLowerCase().includes(term) ||
        product.category.toLowerCase().includes(term);

      return matchesCategory && matchesSearch;
    });

    if (sortBy === 'price-low') result.sort((a, b) => a.price - b.price);
    if (sortBy === 'price-high') result.sort((a, b) => b.price - a.price);
    if (sortBy === 'rating') result.sort((a, b) => b.rating - a.rating);
    if (sortBy === 'discount') {
      result.sort(
        (a, b) =>
          (b.originalPrice ? b.originalPrice - b.price : 0) -
          (a.originalPrice ? a.originalPrice - a.price : 0)
      );
    }

    return result;
  }, [activeCategory, search, sortBy]);

  function toggleWishlist(id) {
    setWishlist((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  }

  function addProduct(product) {
    onAdd?.(product);
    setAddedId(product.id);
    window.setTimeout(() => setAddedId(null), 1200);
  }

  return (
    <section className="products-section" id="products">
      <div className="products-shell">
        <div className="products-heading">
          <div>
            <span className="nc-eyebrow">THE NOVACART COLLECTION</span>
            <h2 className="section-heading">Find something you love<span>.</span></h2>
            <p className="section-description">
              Thoughtful picks for your everyday life.
            </p>
          </div>

          <div className="products-count">
            <ShoppingBag size={17} />
            <span>{filteredProducts.length} products</span>
          </div>
        </div>

        <div className="products-toolbar">
          <div className="category-filters" aria-label="Filter by category">
            <button
              className={activeCategory === 'all' ? 'filter-chip active' : 'filter-chip'}
              onClick={() => setActiveCategory('all')}
            >
              All products
            </button>

            {categories.map((category) => (
              <button
                key={category.id}
                className={
                  activeCategory === category.id
                    ? 'filter-chip active'
                    : 'filter-chip'
                }
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>

          <div className="products-controls">
            <label className="product-search">
              <Search size={17} />
              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search products"
                aria-label="Search products"
              />
              {search && (
                <button onClick={() => setSearch('')} aria-label="Clear search">
                  <X size={15} />
                </button>
              )}
            </label>

            <label className="product-sort">
              <ArrowDownUp size={16} />
              <select
                value={sortBy}
                onChange={(event) => setSortBy(event.target.value)}
                aria-label="Sort products"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: low to high</option>
                <option value="price-high">Price: high to low</option>
                <option value="rating">Top rated</option>
                <option value="discount">Biggest savings</option>
              </select>
            </label>
          </div>
        </div>

        <div className="products-grid">
          {filteredProducts.map((product, index) => {
            const isWishlisted = wishlist.includes(product.id);
            const isAdded = addedId === product.id;
            const discount = product.originalPrice
              ? Math.round(
                  ((product.originalPrice - product.price) /
                    product.originalPrice) *
                    100
                )
              : 0;

            return (
              <article
                className="product-card"
                key={product.id}
                style={{ '--card-index': index }}
              >
                <div className="product-image-wrap">
                  <img
                    className="product-image"
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                  />

                  {product.badge && (
                    <span
                      className={
                        product.badge === 'Sale'
                          ? 'product-badge sale-badge'
                          : 'product-badge'
                      }
                    >
                      {product.badge}
                    </span>
                  )}

                  {discount > 0 && (
                    <span className="product-discount">-{discount}%</span>
                  )}

                  <button
                    className={
                      isWishlisted ? 'wishlist-button selected' : 'wishlist-button'
                    }
                    onClick={() => toggleWishlist(product.id)}
                    aria-label={
                      isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'
                    }
                    aria-pressed={isWishlisted}
                  >
                    <Heart size={18} fill={isWishlisted ? 'currentColor' : 'none'} />
                  </button>

                  <button
                    className="quick-view-button"
                    onClick={() => setQuickView(product)}
                  >
                    <ZoomIn size={16} /> Quick view
                  </button>
                </div>

                <div className="product-card-content">
                  <span className="product-category">
                    {categories.find((item) => item.id === product.category)?.name}
                  </span>

                  <button
                    className="product-name"
                    onClick={() => setQuickView(product)}
                  >
                    {product.name}
                  </button>

                  <div className="product-rating">
                    <Star size={14} fill="currentColor" />
                    <strong>{product.rating.toFixed(1)}</strong>
                    <span>({product.reviewCount} reviews)</span>
                  </div>

                  <div className="product-card-bottom">
                    <div className="product-prices">
                      <strong>{formatPrice(product.price)}</strong>
                      {product.originalPrice && (
                        <del>{formatPrice(product.originalPrice)}</del>
                      )}
                    </div>

                    <button
                      className={isAdded ? 'add-cart-button added' : 'add-cart-button'}
                      onClick={() => addProduct(product)}
                      aria-label={`Add ${product.name} to cart`}
                    >
                      {isAdded ? <Check size={18} /> : <ShoppingBag size={18} />}
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {filteredProducts.length === 0 && (
          <div className="products-empty">
            <SlidersHorizontal size={28} />
            <h3>No products found</h3>
            <p>Try another search or clear your filters.</p>
            <button
              className="reset-filters-button"
              onClick={() => {
                setSearch('');
                setActiveCategory('all');
                setSortBy('featured');
              }}
            >
              Clear filters
            </button>
          </div>
        )}

        <div className="products-note">
          <span>Thoughtfully selected.</span>
          <span>Made for everyday shopping.</span>
        </div>
      </div>

      {quickView && (
        <div
          className="quick-view-overlay"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setQuickView(null);
          }}
        >
          <section
            className="quick-view-modal"
            role="dialog"
            aria-modal="true"
            aria-label={`Quick view: ${quickView.name}`}
          >
            <button
              className="quick-view-close"
              onClick={() => setQuickView(null)}
              aria-label="Close quick view"
            >
              <X size={21} />
            </button>

            <div className="quick-view-image">
              <img src={quickView.image} alt={quickView.name} />
            </div>

            <div className="quick-view-details">
              <span className="nc-eyebrow">NOVACART PICKS</span>
              <h2>{quickView.name}</h2>

              <div className="product-rating modal-rating">
                <Star size={15} fill="currentColor" />
                <strong>{quickView.rating.toFixed(1)}</strong>
                <span>({quickView.reviewCount} reviews)</span>
              </div>

              <div className="quick-view-price">
                <strong>{formatPrice(quickView.price)}</strong>
                {quickView.originalPrice && (
                  <del>{formatPrice(quickView.originalPrice)}</del>
                )}
              </div>

              <p>{quickView.description}</p>

              <button
                className="quick-view-add"
                onClick={() => {
                  addProduct(quickView);
                  setQuickView(null);
                }}
              >
                <ShoppingBag size={18} /> Add to cart
              </button>

              <span className="quick-view-demo-note">
                Demo product · No real payment required
              </span>
            </div>
          </section>
        </div>
      )}
    </section>
  );
}
