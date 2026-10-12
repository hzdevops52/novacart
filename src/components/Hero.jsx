import React from 'react';
import {
  ArrowRight,
  Truck,
  ShieldCheck,
  RefreshCw,
  Sparkles,
} from 'lucide-react';
import '../styles/novacart-home.css';

export default function Hero() {
  return (
    <section className="nc-hero nc-hero-redesign" id="home-page">
      <div className="nc-hero-redesign-inner">
        <div className="nc-hero-redesign-copy">
          <div className="nc-hero-redesign-eyebrow">
            <Sparkles size={14} />
            <span>YOUR EVERYDAY, UPGRADED</span>
          </div>

          <h1>
            Find your
            <br />
            next <span>favorite.</span>
          </h1>

          <p className="nc-hero-redesign-description">
            Good things have a way of finding you. Explore considered
            picks for your wardrobe, your home, and everything in between.
          </p>

          <div className="nc-hero-redesign-actions">
            <a className="nc-hero-redesign-primary" href="#products">
              Discover the collection
              <ArrowRight size={17} />
            </a>
            <a className="nc-hero-redesign-secondary" href="#categories">
              Explore categories
            </a>
          </div>

          <div className="nc-hero-redesign-trust">
            <div className="nc-hero-redesign-trust-item">
              <span className="nc-hero-redesign-trust-icon">
                <Truck size={17} />
              </span>
              <span>Delivery information</span>
            </div>
            <div className="nc-hero-redesign-trust-item">
              <span className="nc-hero-redesign-trust-icon">
                <ShieldCheck size={17} />
              </span>
              <span>Shop with confidence</span>
            </div>
            <div className="nc-hero-redesign-trust-item">
              <span className="nc-hero-redesign-trust-icon">
                <RefreshCw size={16} />
              </span>
              <span>Returns information</span>
            </div>
          </div>
        </div>

        <div className="nc-hero-redesign-visual">
          <div className="nc-hero-redesign-image-main">
            <img
              src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1100&q=85"
              alt="A curated look at everyday wardrobe essentials"
              fetchPriority="high"
            />
            <div className="nc-hero-redesign-image-caption">
              <span className="nc-hero-redesign-caption-kicker">
                THE NOVACART EDIT
              </span>
              <strong>Little things. Better days.</strong>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
}
