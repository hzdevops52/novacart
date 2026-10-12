import React, { useState } from 'react';
import { ShoppingBag, X, Plus, Minus, Trash2, ArrowRight, ArrowLeft, MessageCircle, CheckCircle2 } from 'lucide-react';
import { formatPrice } from '../data/products.js';
import '../styles/cart.css';

const WHATSAPP_NUMBER = '923277495256';

export default function CartDrawer({ items, onClose, onQuantityChange, onRemove }) {
  const [view, setView] = useState('cart');
  const [customer, setCustomer] = useState({
    name: '',
    phone: '',
    city: '',
    address: '',
    instructions: '',
  });

  const subtotal = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const cartCount = items.reduce((total, item) => total + item.quantity, 0);

  function updateCustomer(event) {
    const { name, value } = event.target;
    setCustomer((current) => ({ ...current, [name]: value }));
  }

  function confirmOrder(event) {
    event.preventDefault();

    if (items.length === 0) return;

    const orderLines = items.map((item, index) =>
      `${index + 1}. ${item.name}\n   Quantity: ${item.quantity}\n   Unit price: ${formatPrice(item.price)}\n   Line total: ${formatPrice(item.price * item.quantity)}`
    );

    const message = [
      '🛍️ *NOVACART — NEW ORDER*',
      '',
      '*Customer Details*',
      `Name: ${customer.name.trim()}`,
      `Contact: ${customer.phone.trim()}`,
      `City: ${customer.city.trim()}`,
      `Delivery Address: ${customer.address.trim()}`,
      customer.instructions.trim()
        ? `Delivery Instructions: ${customer.instructions.trim()}`
        : '',
      '',
      '*Order Items*',
      ...orderLines,
      '',
      `*Order Subtotal: ${formatPrice(subtotal)}*`,
      '',
      'Please confirm product availability and delivery charges.',
    ].filter(Boolean).join('\n');

    const whatsappUrl =
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    // Open directly from the submit action to reduce popup-blocking risk.
    const whatsappWindow = window.open(whatsappUrl, '_blank');

    if (whatsappWindow) {
      whatsappWindow.opener = null;
    }
  }

  return (
    <div
      className="cart-overlay"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <aside
        className={`cart-drawer ${view === 'checkout' ? 'cart-drawer-checkout' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label={view === 'cart' ? 'Shopping cart' : 'Order details'}
      >
        <div className="cart-drawer-header">
          <div>
            <span className="cart-kicker">
              {view === 'cart' ? 'YOUR SELECTION' : 'ALMOST THERE'}
            </span>
            <h2>
              {view === 'cart'
                ? <>Your shopping bag <span>({cartCount})</span></>
                : 'Complete your order'}
            </h2>
          </div>
          <button className="cart-close" onClick={onClose} aria-label="Close cart">
            <X size={22} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="cart-empty">
            <div className="cart-empty-icon"><ShoppingBag size={30} /></div>
            <h3>Your bag is taking a break</h3>
            <p>Looks like you haven't added anything yet. Find something you'll love.</p>
            <button className="cart-continue" onClick={onClose}>
              Explore products <ArrowRight size={17} />
            </button>
          </div>
        ) : view === 'cart' ? (
          <>
            <div className="cart-items">
              {items.map((item) => (
                <article className="cart-item" key={item.id}>
                  <img src={item.image} alt={item.name} />
                  <div className="cart-item-info">
                    <span className="cart-item-category">{item.category}</span>
                    <h3>{item.name}</h3>
                    <strong>{formatPrice(item.price)}</strong>
                    <div className="cart-item-actions">
                      <div className="cart-quantity">
                        <button
                          onClick={() => onQuantityChange(item.id, item.quantity - 1)}
                          aria-label={`Decrease ${item.name} quantity`}
                        >
                          <Minus size={14} />
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() => onQuantityChange(item.id, item.quantity + 1)}
                          aria-label={`Increase ${item.name} quantity`}
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <button
                        className="cart-remove"
                        onClick={() => onRemove(item.id)}
                        aria-label={`Remove ${item.name}`}
                      >
                        <Trash2 size={15} /> Remove
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="cart-summary">
              <div className="cart-summary-line">
                <span>Subtotal</span>
                <strong>{formatPrice(subtotal)}</strong>
              </div>
              <p>Delivery charges will be confirmed with you before your order is finalized.</p>
              <button className="cart-checkout" onClick={() => setView('checkout')}>
                Order Now <ArrowRight size={18} />
              </button>
              <button className="cart-keep-shopping" onClick={onClose}>
                Continue shopping
              </button>
            </div>
          </>
        ) : (
          <form className="order-form" onSubmit={confirmOrder}>
            <div className="order-form-intro">
              <div className="order-form-icon"><CheckCircle2 size={23} /></div>
              <div>
                <h3>Delivery information</h3>
                <p>Enter your details so we know where to deliver your order.</p>
              </div>
            </div>

            <div className="order-form-fields">
              <label className="order-field">
                Full name <span>*</span>
                <input
                  name="name"
                  value={customer.name}
                  onChange={updateCustomer}
                  placeholder="Enter your full name"
                  autoComplete="name"
                  required
                  maxLength={100}
                />
              </label>

              <label className="order-field">
                Contact number <span>*</span>
                <input
                  name="phone"
                  type="tel"
                  value={customer.phone}
                  onChange={updateCustomer}
                  placeholder="e.g. 03XX XXXXXXX"
                  autoComplete="tel"
                  required
                  maxLength={30}
                />
              </label>

              <label className="order-field">
                City <span>*</span>
                <input
                  name="city"
                  value={customer.city}
                  onChange={updateCustomer}
                  placeholder="Your city"
                  autoComplete="address-level2"
                  required
                  maxLength={100}
                />
              </label>

              <label className="order-field">
                Complete delivery address <span>*</span>
                <textarea
                  name="address"
                  value={customer.address}
                  onChange={updateCustomer}
                  placeholder="House number, street, area, and nearby landmark"
                  autoComplete="street-address"
                  rows={3}
                  required
                  maxLength={500}
                />
              </label>

              <label className="order-field">
                Delivery instructions <small>(optional)</small>
                <textarea
                  name="instructions"
                  value={customer.instructions}
                  onChange={updateCustomer}
                  placeholder="Any helpful delivery details"
                  rows={2}
                  maxLength={500}
                />
              </label>
            </div>

            <div className="order-review">
              <h3>Your order</h3>
              <div className="order-review-items">
                {items.map((item) => (
                  <div className="order-review-line" key={item.id}>
                    <span>{item.name} <small>× {item.quantity}</small></span>
                    <strong>{formatPrice(item.price * item.quantity)}</strong>
                  </div>
                ))}
              </div>
              <div className="order-review-total">
                <span>Order subtotal</span>
                <strong>{formatPrice(subtotal)}</strong>
              </div>
              <p>Delivery charges are not included and will be confirmed separately.</p>
            </div>

            <div className="order-form-actions">
              <button
                type="button"
                className="order-back"
                onClick={() => setView('cart')}
              >
                <ArrowLeft size={17} /> Back to bag
              </button>
              <button type="submit" className="order-confirm">
                Confirm Order <MessageCircle size={18} />
              </button>
            </div>

            <p className="order-privacy-note">
              Confirming opens WhatsApp with your order prepared. You will review it and press Send in WhatsApp.
            </p>
          </form>
        )}
      </aside>
    </div>
  );
}
