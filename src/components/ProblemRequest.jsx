import React, { useState } from "react";
import { ArrowUpRight, CheckCircle2, MessageCircle, Globe } from "lucide-react";

const WHATSAPP_NUMBER = "923277495256";

const services = [
  "Website",
  "Web Application",
  "Docker & Deployment",
  "Cloud & Hosting",
  "CI/CD Automation",
  "DevOps & Monitoring",
  "Not Sure Yet",
];

const websiteNeeds = [
  "I need a new business website",
  "I want to redesign my existing website",
  "I want my website to work better on mobile",
  "I need to add services, pricing, or business information",
  "I need a contact form or WhatsApp button",
  "I need help with my domain or hosting",
  "I need to fix an issue with my website",
  "Something else",
];

export default function ProblemRequest() {
  const [service, setService] = useState("Website");
  const [selectedNeeds, setSelectedNeeds] = useState([]);
  const [description, setDescription] = useState("");
  const [contact, setContact] = useState("WhatsApp");

  const needs = service === "Website"
    ? websiteNeeds
    : [
        `I need a new ${service.toLowerCase()} solution`,
        `I need to fix an existing ${service.toLowerCase()} setup`,
        `I need help improving my current setup`,
        "I need advice about the right solution",
        "Something else",
      ];

  function toggleNeed(need) {
    setSelectedNeeds((current) =>
      current.includes(need)
        ? current.filter((item) => item !== need)
        : [...current, need]
    );
  }

  function handleSubmit(event) {
    event.preventDefault();

    const message = [
      "Hello HZTECHCLOUD! I'd like to discuss a project.",
      "",
      `Service: ${service}`,
      "",
      "What I need help with:",
      ...(selectedNeeds.length
        ? selectedNeeds.map((need) => `- ${need}`)
        : ["- No specific option selected"]),
      ...(description.trim()
        ? ["", "Additional details:", description.trim()]
        : []),
      "",
      `Preferred contact: ${contact}`,
    ].join("\n");

    const whatsappUrl =
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    window.location.href = whatsappUrl;
  }

  return (
    <section className="problem-request-section" id="request">
      <div className="section-shell">
        <div className="problem-request-heading">
          <span className="section-kicker">
            <span /> LET'S GET STARTED
          </span>
          <h2>
            Tell Us What You <span className="text-gradient">Need Help With.</span>
          </h2>
          <p>
            Choose what you need, tell us a little about your project,
            and send your request directly to us on WhatsApp.
          </p>
        </div>

        <form className="problem-request-card" onSubmit={handleSubmit}>
          <div className="request-step">
            <span className="request-step-number">01</span>
            <div>
              <h3>What service do you need?</h3>
              <p>Select the service that best matches your needs.</p>
            </div>
          </div>

          <label className="request-label" htmlFor="request-service">
            Service
          </label>
          <select
            id="request-service"
            className="request-select"
            value={service}
            onChange={(event) => {
              setService(event.target.value);
              setSelectedNeeds([]);
            }}
          >
            {services.map((item) => (
              <option value={item} key={item}>{item}</option>
            ))}
          </select>

          <div className="request-step request-needs-step">
            <span className="request-step-number">02</span>
            <div>
              <h3>What would you like us to help with?</h3>
              <p>Select all options that apply to your situation.</p>
            </div>
          </div>

          <div className="request-options">
            {needs.map((need) => {
              const checked = selectedNeeds.includes(need);

              return (
                <label
                  className={`request-option${checked ? " is-selected" : ""}`}
                  key={need}
                >
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => toggleNeed(need)}
                  />
                  <span className="request-checkbox">
                    {checked && <CheckCircle2 size={17} />}
                  </span>
                  <span>{need}</span>
                </label>
              );
            })}
          </div>

          <div className="request-details">
            <label className="request-label" htmlFor="request-description">
              Anything else we should know? <span>(Optional)</span>
            </label>
            <textarea
              id="request-description"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              placeholder="Briefly describe your idea or problem..."
              rows={4}
            />
          </div>

          <div className="request-contact">
            <div className="request-step">
              <span className="request-step-number">03</span>
              <div>
                <h3>How would you like us to contact you?</h3>
                <p>Your request will be prepared for WhatsApp.</p>
              </div>
            </div>

            <label className="request-contact-choice">
              <input
                type="radio"
                name="preferred-contact"
                value="WhatsApp"
                checked={contact === "WhatsApp"}
                onChange={(event) => setContact(event.target.value)}
              />
              <MessageCircle size={21} />
              <span>
                <strong>WhatsApp</strong>
                <small>Send your request directly to HZTECHCLOUD</small>
              </span>
              <CheckCircle2 className="request-contact-check" size={19} />
            </label>
          </div>

          <button className="button-primary request-submit" type="submit">
            Send Request on WhatsApp <ArrowUpRight size={18} />
          </button>

          <p className="request-privacy-note">
            Your selections will be included in a WhatsApp message.
            Review and send the message in WhatsApp to contact us.
          </p>
        </form>

        <div className="request-direct-contact">
          <Globe size={19} />
          <span>Prefer to talk directly?</span>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noreferrer"
          >
            Chat on WhatsApp <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
