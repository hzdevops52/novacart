import React from 'react';
import {
  Shirt,
  Headphones,
  Lamp,
  Watch,
  ArrowUpRight,
} from 'lucide-react';
import { categories } from '../data/products.js';

const categoryDetails = {
  fashion: {
    icon: Shirt,
    tone: 'blue',
    image:
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=600&q=80',
    alt: 'Fashion and clothing collection',
  },
  electronics: {
    icon: Headphones,
    tone: 'lavender',
    image:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80',
    alt: 'Headphones from the electronics collection',
  },
  home: {
    icon: Lamp,
    tone: 'sand',
    image:
      'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=600&q=80',
    alt: 'Home decor and lifestyle products',
  },
  accessories: {
    icon: Watch,
    tone: 'rose',
    image:
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80',
    alt: 'Watches and everyday accessories',
  },
};

export default function CategorySection({ onSelectCategory }) {
  return (
    <section className="nc-category-section" id="categories">
      <div className="section-shell">
        <div className="nc-section-header">
          <div>
            <span className="nc-eyebrow">FIND YOUR FAVORITES</span>
            <h2 className="section-heading">Shop by category</h2>
            <p className="section-description">
              A little bit of everything, all in one place.
            </p>
          </div>
          <a className="nc-text-link nc-desktop-category-link" href="#products">
            View all products <ArrowUpRight size={17} />
          </a>
        </div>

        <div className="nc-category-grid">
          {categories.map((category) => {
            const details = categoryDetails[category.id];
            const Icon = details.icon;

            return (
              <a
                className="nc-category-card"
                key={category.id}
                href="#products"
                onClick={(event) => {
                  event.preventDefault();
                  onSelectCategory?.(category.id);
                }}
                aria-label={`Browse ${category.name}`}
              >
                <div className={`nc-category-image nc-tone-${details.tone}`}>
                  <img src={details.image} alt={details.alt} loading="lazy" />
                  <span className="nc-category-icon">
                    <Icon size={19} strokeWidth={1.8} />
                  </span>
                  <span className="nc-category-arrow">
                    <ArrowUpRight size={18} />
                  </span>
                </div>

                <div className="nc-category-info">
                  <div>
                    <h3>{category.name}</h3>
                    <p>{category.description}</p>
                  </div>
                  <ArrowUpRight className="nc-category-info-arrow" size={17} />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
