/**
 * LandContent Component - Complete Professional Redesign
 */

import { useState, useMemo } from "react";
import Button from "@mui/material/Button";
import CropPortraitIcon from "@mui/icons-material/CropPortrait";
import CropIcon from "@mui/icons-material/Crop";
import ShortcutIcon from "@mui/icons-material/Shortcut";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import HubIcon from "@mui/icons-material/Hub";
import CheckIcon from "@mui/icons-material/Check";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import StarIcon from "@mui/icons-material/Star";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import GroupsIcon from "@mui/icons-material/Groups";
import BoltIcon from "@mui/icons-material/Bolt";
import SpotlightCard from "../SpotlightCard";
import {
  heroContent,
  secondSection,
  workflowCards,
  advancedSection,
  features,
} from "../../data";
import "./LandContent.css";

// Icon component mapping
const iconMap = {
  CropPortrait: CropPortraitIcon,
  Crop: CropIcon,
  Shortcut: ShortcutIcon,
  VolumeUp: VolumeUpIcon,
  Hub: HubIcon,
  Check: CheckIcon,
};

// Trust indicators data
const trustIndicators = [
  { icon: StarIcon, text: "4.9/5 rating" },
  { icon: GroupsIcon, text: "10K+ teams" },
  { icon: TrendingUpIcon, text: "99.9% uptime" },
];

// Generate stable particle positions (deterministic)
const generateParticles = (count) => {
  const particles = [];
  for (let i = 0; i < count; i++) {
    particles.push({
      id: i,
      left: `${(i * 17 + 7) % 100}%`,
      top: `${(i * 23 + 11) % 100}%`,
      delay: `${(i * 0.3) % 5}s`,
      duration: `${3 + (i % 4)}s`,
      size: 2 + (i % 3) * 2,
    });
  }
  return particles;
};

export default function LandContent() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  // Memoize particles to avoid re-generating on each render
  const particles = useMemo(() => generateParticles(20), []);

  return (
    <main className="land-content">
      {/* ==================== HERO SECTION - COMPLETE REDESIGN ==================== */}
      <section className="hero-section-pro">
        {/* Dynamic Background */}
        <div className="hero-bg-pro">
          <div className="hero-glow-pro"></div>
          <div className="hero-grid-pro"></div>
          <div className="hero-particles-pro">
            {particles.map((particle) => (
              <div
                key={particle.id}
                className="particle"
                style={{
                  left: particle.left,
                  top: particle.top,
                  animationDelay: particle.delay,
                  animationDuration: particle.duration,
                  width: `${particle.size}px`,
                  height: `${particle.size}px`,
                }}
              ></div>
            ))}
          </div>
        </div>

        <div className="hero-container-pro">
          {/* Top Trust Bar */}
          <div className="trust-bar-pro">
            <div className="trust-items-pro">
              {trustIndicators.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="trust-item-pro">
                    <Icon className="trust-icon-pro" />
                    <span>{item.text}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Main Hero Content */}
          <div className="hero-content-pro">
            {/* Badge */}
            <div className="hero-badge-pro">
              <span className="badge-dot-pro"></span>
              <span>{heroContent.badge}</span>
            </div>

            {/* Title */}
            <h1 className="hero-title-pro">
              {heroContent.title.split(" ").map((word, index) =>
                index === 2 ? (
                  <span key={index} className="gradient-text-pro">
                    {word}
                  </span>
                ) : (
                  <span key={index}> {word}</span>
                ),
              )}
            </h1>

            {/* Description */}
            <p className="hero-description-pro">{heroContent.description}</p>

            {/* CTA Buttons */}
            <div className="hero-cta-pro">
              <button className="cta-primary-pro">
                <span>{heroContent.ctaPrimary}</span>
                <ArrowForwardIcon className="cta-icon-pro" />
              </button>
              <button
                className="cta-secondary-pro"
                onClick={() => setIsVideoPlaying(true)}
              >
                <PlayCircleOutlineIcon className="play-icon-pro" />
                <span>{heroContent.ctaSecondary}</span>
              </button>
            </div>

            {/* Stats Row */}
            <div className="hero-stats-pro">
              {heroContent.stats.map((stat, index) => (
                <div key={index} className="stat-card-pro">
                  <span className="stat-value-pro">{stat.value}</span>
                  <span className="stat-label-pro">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Video Showcase */}
          <div className="hero-video-section-pro">
            <div className="video-frame-pro">
              <video
                className="hero-video-pro"
                src="/landing-page-demo/video/video.mp4"
                controls={isVideoPlaying}
                playsInline
                preload="metadata"
                poster="/landing-page-demo/images/page-illustration.png"
              />

              {!isVideoPlaying && (
                <div
                  className="video-overlay-pro"
                  onClick={() => setIsVideoPlaying(true)}
                >
                  <div className="play-button-pro">
                    <PlayCircleOutlineIcon className="play-svg-pro" />
                  </div>
                  <span className="video-label-pro">See how it works</span>
                </div>
              )}
            </div>

            {/* Floating Cards */}
            <div className="floating-card-pro fc-1">
              <div className="fc-icon-pro">
                <BoltIcon />
              </div>
              <div className="fc-content-pro">
                <span className="fc-title-pro">Automation ready</span>
                <span className="fc-subtitle-pro">Setup in minutes</span>
              </div>
            </div>

            <div className="floating-card-pro fc-2">
              <div className="fc-icon-pro success">
                <CheckIcon />
              </div>
              <div className="fc-content-pro">
                <span className="fc-title-pro">Task completed</span>
                <span className="fc-subtitle-pro">Just now</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== WORKFLOW SECTION ==================== */}
      <section className="workflow-section-pro">
        <div className="container-pro">
          <div className="section-header-pro">
            <span className="section-label-pro">{secondSection.subtitle}</span>
            <h2 className="section-title-pro">{secondSection.title}</h2>
            <p className="section-desc-pro">{secondSection.description}</p>
          </div>

          <div className="workflow-grid-pro">
            {workflowCards.map((card, index) => (
              <SpotlightCard
                key={card.id}
                className={`workflow-card-pro delay-${index * 100}`}
              >
                <div className="card-image-pro">
                  <img src={card.image} alt={`Workflow ${card.id}`} />
                </div>
                <p className="card-text-pro">{card.description}</p>
                <a href="#" className="card-link-pro">
                  Learn more <ArrowForwardIcon />
                </a>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== FEATURES SECTION ==================== */}
      <section className="features-section-pro">
        <div className="container-pro">
          <div className="section-header-pro">
            <span className="section-label-pro">
              {advancedSection.subtitle}
            </span>
            <h2 className="section-title-pro">{advancedSection.title}</h2>
            <p className="section-desc-pro">{advancedSection.description}</p>
          </div>

          <div className="features-image-pro">
            <img
              src="/landing-page-demo/images/features.png"
              alt="Features"
              className="features-img-pro"
            />
          </div>

          <div className="features-grid-pro">
            {features.map((feature, index) => {
              const IconComponent = iconMap[feature.iconName];
              return (
                <div key={index} className="feature-card-pro">
                  <div className="feature-icon-pro">
                    {IconComponent && <IconComponent />}
                  </div>
                  <div className="feature-content-pro">
                    <h4 className="feature-title-pro">{feature.title}</h4>
                    <p className="feature-desc-pro">
                      Track progress across custom flows for your team. Find the
                      right balance for the user, privacy and security.
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
