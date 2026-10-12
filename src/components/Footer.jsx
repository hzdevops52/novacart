import React, { useState } from 'react';
import {
  ArrowRight,
  Facebook,
  Instagram,
  Mail,
  ShieldCheck,
  Truck,
  RotateCcw,
  Headphones,
} from 'lucide-react';
import '../styles/footer.css';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  function handleSubscribe(event) {
    event.preventDefault();

    if (!email.trim()) return;

    setSubscribed(true);
    setEmail('');
  }

  return (
    <footer className="site-footer" id="footer">
      <div className="footer-benefits">
        <div className="footer-benefit">
          <Truck size={23} />
          <div>
            <strong>Reliable Delivery</strong>
            <span>Convenient shopping, delivered</span>
          </div>
        </div>

        <div className="footer-benefit">
          <RotateCcw size={23} />
          <div>
            <strong>Easy Returns</strong>
            <span>A simpler shopping experience</span>
          </div>
        </div>

        <div className="footer-benefit">
          <ShieldCheck size={23} />
          <div>
            <strong>Secure Shopping</strong>
            <span>Your experience matters</span>
          </div>
        </div>

        <div className="footer-benefit">
          <Headphones size={23} />
          <div>
            <strong>Customer Support</strong>
            <span>Here to help when you need us</span>
          </div>
        </div>
      </div>

      <div className="footer-main">
        <div className="footer-brand">
          <a href="#home" className="footer-logo">
            Nova<span>Cart</span>
            <span className="footer-logo-dot">.</span>
          </a>

          <p>
            Everyday shopping, made simple. Discover useful finds,
            everyday essentials, and products you'll love.
          </p>

          <div className="footer-socials">
            <a href="#footer" aria-label="Facebook">
              <Facebook size={18} />
            </a>
            <a href="#footer" aria-label="Instagram">
              <Instagram size={18} />
            </a>
            <a href="mailto:hello@novacart.example" aria-label="Email us">
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div className="footer-links">
          <h3>Explore</h3>
          <a href="#products">All Products</a>
          <a href="#categories">Shop Categories</a>
          <a href="#featured">Featured Picks</a>
          <a href="#products">Best Sellers</a>
        </div>

        <div className="footer-links">
          <h3>Customer Care</h3>
          <a href="#footer">Contact Us</a>
          <a href="#footer">Shipping Information</a>
          <a href="#footer">Returns & Exchanges</a>
          <a href="#footer">Frequently Asked Questions</a>
        </div>

        <div className="footer-newsletter">
          <h3>Stay in the loop</h3>
          <p>Get updates on new arrivals and special offers.</p>

          <form className="newsletter-form" onSubmit={handleSubscribe}>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Your email address"
              aria-label="Your email address"
              required
            />
            <button type="submit" aria-label="Subscribe">
              <ArrowRight size={19} />
            </button>
          </form>

          {subscribed && (
            <p className="newsletter-success" role="status">
              Thanks! This demo subscription was recorded locally.
            </p>
          )}

          <small>Demo form only — no email is sent or stored.</small>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} NovaCart. Demo storefront.</p>
        <div>
          <a href="#footer">Privacy</a>
          <a href="#footer">Terms</a>
          <span>Made for everyday shopping.</span>
        </div>
      </div>
    </footer>
  );
}
