import React from "react";
import { ArrowUpRight } from "lucide-react";
import { services } from "../data/services.js";

const WHATSAPP_NUMBER = "923277495256";

const serviceImages = [
  {
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
    alt: "Professional business website and web analytics displayed on a screen"
  },
  {
    src: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=900&q=80",
    alt: "Modern application interface and digital product design"
  },
  {
    src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=900&q=80",
    alt: "DevOps engineering and automated software deployment workflow"
  },
  {
    src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
    alt: "Cloud computing infrastructure and global connectivity"
  },
  {
    src: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=900&q=80",
    alt: "Technology hardware representing software build and automation systems"
  },
  {
    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
    alt: "Monitoring dashboard with charts and operational metrics"
  }
];

export default function Services() {
  return (
    <section className="section-shell services-section" id="services">
      <div className="section-heading">
        <div>
          <span className="section-kicker">
            <span /> WHAT WE CAN DO FOR YOU
          </span>
          <h2>
            Technology that <span className="text-gradient">works for you.</span>
          </h2>
        </div>
        <p>
          From your first website to automated deployment, practical solutions
          for the next stage of your business.
        </p>
      </div>

      <div className="services-grid">
        {services.map(({ number, title }, index) => {
          const image = serviceImages[index];
          const message = `Hello HZTECHCLOUD, I'm interested in your ${title} service. Please share the details.`;
          const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

          return (
            <article className="service-card" key={number}>
              <div className="service-image-wrap">
                <img
                  className="service-image"
                  src={image.src}
                  alt={image.alt}
                  loading={index < 3 ? "eager" : "lazy"}
                  decoding="async"
                />
              </div>

              <h3>{title}</h3>

              <a
                href={whatsappUrl}
                className="service-order-button"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Order ${title} through WhatsApp`}
              >
                Order Now <ArrowUpRight size={16} />
              </a>
            </article>
          );
        })}
      </div>
    </section>
  );
}
