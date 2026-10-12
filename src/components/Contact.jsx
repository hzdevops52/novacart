import React from "react";
import {
  ArrowUpRight,
  Mail,
  MessageCircle,
  BriefcaseBusiness,
  ExternalLink,
} from "lucide-react";

const EMAIL = "hzdevops52@gmail.com";
const WHATSAPP_NUMBER = "923277495256";
const FIVERR_URL = "https://www.fiverr.com/hassanzubair52";
const TASKPULL_URL = "https://taskpull.com/sellers/hassan-zubair";

export default function Contact() {
  const emailReady = !EMAIL.includes("example.com");
  const whatsappReady = WHATSAPP_NUMBER.length > 0;

  return (
    <section className="section-shell contact-section" id="contact">
      <div className="contact-panel">
        <div className="contact-glow" />

        <div className="contact-content">
          <span className="section-kicker">
            <span /> HAVE A PROJECT IN MIND?
          </span>

          <h2>
            Let's build something{" "}
            <span className="text-gradient">meaningful.</span>
          </h2>

          <p>
            Tell us what you're planning. We'll explore the requirements and
            find a practical way to bring your idea to life.
          </p>

          <div className="contact-actions">
            <a
              className="button-primary"
              href={
                emailReady
                  ? `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}`
                  : "#contact-details"
              }
              target="_blank"
              rel="noreferrer"
            >
              Start a conversation <ArrowUpRight size={17} />
            </a>

            <a className="button-secondary" href="#services">
              Explore services
            </a>
          </div>
        </div>

        <div className="contact-details" id="contact-details">
          <a
            href={
              emailReady
                ? `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}`
                : undefined
            }
            target="_blank"
            rel="noreferrer"
          >
            <span className="contact-detail-icon">
              <Mail size={20} />
            </span>
            <span>
              <small>EMAIL</small>
              <b>{EMAIL}</b>
            </span>
            <ArrowUpRight size={17} />
          </a>

          <a
            href={
              whatsappReady
                ? `https://wa.me/${WHATSAPP_NUMBER}`
                : undefined
            }
            target="_blank"
            rel="noreferrer"
          >
            <span className="contact-detail-icon whatsapp">
              <MessageCircle size={20} />
            </span>
            <span>
              <small>WHATSAPP</small>
              <b>+{WHATSAPP_NUMBER}</b>
            </span>
            <ArrowUpRight size={17} />
          </a>

          <a href={FIVERR_URL} target="_blank" rel="noreferrer">
            <span className="contact-detail-icon">
              <BriefcaseBusiness size={20} />
            </span>
            <span>
              <small>FIVERR</small>
              <b>Hire me on Fiverr</b>
            </span>
            <ExternalLink size={17} />
          </a>

          <a href={TASKPULL_URL} target="_blank" rel="noreferrer">
            <span className="contact-detail-icon">
              <ExternalLink size={20} />
            </span>
            <span>
              <small>TASKPULL</small>
              <b>View my Taskpull profile</b>
            </span>
            <ExternalLink size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}