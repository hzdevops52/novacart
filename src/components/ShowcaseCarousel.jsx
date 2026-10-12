import React, { useEffect, useState } from "react";
import {
  ArrowLeft, ArrowRight, ArrowUpRight, ShoppingBag,
  Utensils, LayoutDashboard, Building2, Check
} from "lucide-react";
import { showcases } from "../data/showcase.js";

const iconByType = {
  restaurant: Utensils,
  commerce: ShoppingBag,
  business: Building2,
  dashboard: LayoutDashboard
};

function Preview({ item }) {
  const Icon = iconByType[item.type] || Building2;

  return (
    <div className={`preview preview-${item.type}`}>
      <div className="preview-topbar">
        <span className="preview-brand">
          <span className="preview-brand-dot" />
          {item.label}
        </span>
        <span className="preview-window-dots"><i /><i /><i /></span>
      </div>

      <div className="preview-body">
        <aside className="preview-sidebar">
          <span className="sidebar-symbol"><Icon size={20} /></span>
          <span className="sidebar-line active" />
          <span className="sidebar-line" />
          <span className="sidebar-line short" />
          <span className="sidebar-line" />
        </aside>

        <div className="preview-content">
          <div className="preview-welcome">
            <div>
              <span className="preview-eyebrow">{item.category}</span>
              <h3>{item.title}</h3>
              <span className="preview-copy">Made for your next big idea.</span>
            </div>
            <span className="preview-icon"><Icon size={25} /></span>
          </div>

          {item.type === "dashboard" ? (
            <>
              <div className="mini-stats">
                <span><small>Overview</small><b>84.6%</b></span>
                <span><small>Activity</small><b>+12.8%</b></span>
                <span><small>Projects</small><b>08</b></span>
              </div>
              <div className="mini-chart">
                {[30,47,37,64,50,79,57,90,69,100,72,84].map((height, i) => (
                  <span key={i} style={{ height: `${height}%` }} />
                ))}
              </div>
            </>
          ) : (
            <div className="preview-cards">
              {item.type === "restaurant" ? (
                <>
                  <div className="food-tile food-one"><span>HOUSE SPECIAL</span><b>Made fresh, every day.</b></div>
                  <div className="food-tile food-two"><Icon size={32} /></div>
                  <div className="food-tile food-three"><Icon size={32} /></div>
                </>
              ) : item.type === "commerce" ? (
                <>
                  <div className="product-tile product-one"><span>01</span></div>
                  <div className="product-tile product-two"><span>02</span></div>
                  <div className="product-tile product-three"><span>03</span></div>
                </>
              ) : (
                <>
                  <div className="business-tile"><span>OUR APPROACH</span><b>Good work starts with a good plan.</b><i /></div>
                  <div className="business-tile secondary"><Icon size={32} /><span>DESIGNED AROUND YOU</span></div>
                </>
              )}
            </div>
          )}

          <div className="preview-bottom"><span /><span /><span /><span className="bottom-long" /></div>
        </div>
      </div>
    </div>
  );
}

export default function ShowcaseCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = showcases.length;
  const item = showcases[index];

  useEffect(() => {
    if (paused || count < 2) return undefined;
    const timer = window.setInterval(() => {
      setIndex(current => (current + 1) % count);
    }, 5500);
    return () => window.clearInterval(timer);
  }, [paused, count]);

  useEffect(() => {
    const onKeyDown = event => {
      if (event.key === "ArrowRight") setIndex(current => (current + 1) % count);
      if (event.key === "ArrowLeft") setIndex(current => (current - 1 + count) % count);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [count]);

  if (!item) return null;

  const change = direction => setIndex(current => (current + direction + count) % count);

  return (
    <div
      id="work"
      className={`showcase showcase-fullscreen showcase-theme-${item.type}`}
      style={{
        "--showcase-accent": item.colors?.[0] || "#7be495",
        "--showcase-deep": item.colors?.[1] || "#234d32"
      }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={event => {
        if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false);
      }}
      aria-label="Website design showcase"
    >
      <div className="showcase-backdrop" />
      <div className="showcase-ambient ambient-one" />
      <div className="showcase-ambient ambient-two" />

      <div className="showcase-design-label">
        <span><Check size={13} /> WEBSITE CONCEPT</span>
        <span className="showcase-count">{String(index + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}</span>
      </div>

      <div className="showcase-large-art" key={item.id}>
        <div className="showcase-art-heading">
          <span>{item.category}</span>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <span className="showcase-art-tag"><ArrowUpRight size={14} /> A concept for your business</span>
        </div>
        <Preview item={item} />
      </div>

      <div className="showcase-controls showcase-controls-full">
        <button className="showcase-arrow" type="button" aria-label="Previous website design" onClick={() => change(-1)}>
          <ArrowLeft size={19} />
        </button>

        <div className="carousel-dots" aria-label="Choose website design">
          {showcases.map((slide, i) => (
            <button
              key={slide.id}
              type="button"
              className={i === index ? "active" : ""}
              aria-label={`Show ${slide.label}`}
              aria-pressed={i === index}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>

        <button className="showcase-arrow" type="button" aria-label="Next website design" onClick={() => change(1)}>
          <ArrowRight size={19} />
        </button>
      </div>
    </div>
  );
}
