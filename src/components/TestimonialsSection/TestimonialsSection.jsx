/**
 * TestimonialsSection Component - Professional Redesign
 */

import { useState } from "react";
import Button from "@mui/material/Button";
import LayersIcon from "@mui/icons-material/Layers";
import HubIcon from "@mui/icons-material/Hub";
import WifiChannelIcon from "@mui/icons-material/WifiChannel";
import PolylineIcon from "@mui/icons-material/Polyline";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import StarIcon from "@mui/icons-material/Star";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import { filters, testimonials, testimonialsSection } from "../../data";
import "./TestimonialsSection.css";

// Icon component mapping
const iconMap = {
  Layers: LayersIcon,
  Hub: HubIcon,
  WifiChannel: WifiChannelIcon,
  Polyline: PolylineIcon,
};

const TestimonialsSection = () => {
  const [activeFilter, setActiveFilter] = useState("View All");

  const filteredTestimonials = testimonials.filter((t) =>
    activeFilter === "View All" ? true : t.category === activeFilter,
  );

  return (
    <section className="testimonials-section-pro">
      {/* Background Effects */}
      <div className="testimonials-bg-pro">
        <div className="testimonials-glow-pro"></div>
      </div>

      <div className="container-pro">
        {/* Section Header */}
        <div className="section-header-pro">
          <span className="section-label-pro">
            {testimonialsSection.subtitle}
          </span>
          <h2 className="section-title-pro">{testimonialsSection.title}</h2>
          <p className="section-desc-pro">{testimonialsSection.description}</p>
        </div>

        {/* Filter buttons */}
        <div className="filter-container-pro">
          {filters.map((filter) => {
            const IconComponent = iconMap[filter.iconName];
            return (
              <button
                key={filter.title}
                onClick={() => setActiveFilter(filter.title)}
                className={`filter-btn-pro ${activeFilter === filter.title ? "active" : ""}`}
              >
                {IconComponent && <IconComponent fontSize="small" />}
                {filter.title}
              </button>
            );
          })}
        </div>

        {/* Testimonial Cards */}
        <div className="testimonials-grid-pro">
          {filteredTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-card-pro"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Quote Icon */}
              <div className="quote-icon-pro">
                <FormatQuoteIcon />
              </div>

              {/* Rating */}
              <div className="testimonial-rating-pro">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="star-icon-pro" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="testimonial-quote-pro">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="testimonial-author-pro">
                <div className="author-avatar-pro">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="author-info-pro">
                  <span className="author-name-pro">{testimonial.name}</span>
                  <span className="author-category-pro">
                    {testimonial.category}
                  </span>
                </div>
              </div>

              {/* Company Logo */}
              <div className="company-logo-pro">
                <img src={testimonial.company} alt={testimonial.name} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="cta-section-pro">
        <div className="cta-bg-pro"></div>
        <div className="cta-container-pro">
          <div className="cta-content-pro">
            <h2 className="cta-title-pro">{testimonialsSection.ctaTitle}</h2>
            <p className="cta-desc-pro">
              Join thousands of teams already using our platform to transform
              their workflow.
            </p>
          </div>
          <div className="cta-actions-pro">
            <button className="cta-primary-pro">
              <span>{testimonialsSection.ctaPrimary}</span>
              <ArrowForwardIcon className="cta-icon-pro" />
            </button>
            <button className="cta-secondary-pro">
              {testimonialsSection.ctaSecondary}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
