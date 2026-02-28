/**
 * Navbar Component - Professional Redesign with Enhanced Mobile Menu
 */

import { useState, useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { navLinks } from "../../data";
import { useTheme } from "../../context/ThemeContext";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) { 
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setTimeout(() => setMenuOpen(false), 300);
  };

  return (
    <nav className={`navbar-pro ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container-pro">
        {/* Logo */}
        <a href="#" className="navbar-logo-pro">
          <img
            src="/landing-page-demo/images/company-logo.svg"
            alt="TechFlow"
            className="logo-img-pro"
          />
          <span className="logo-text-pro">TechFlow</span>
        </a>

        {/* Desktop Navigation */}
        <div className="navbar-links-pro">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="navbar-link-pro">
              {link.label}
            </a>
          ))}
        </div>

        {/* Right Section */}
        <div className="navbar-actions-pro">
          {/* Theme Toggle */}
          <button
            className="theme-toggle-pro"
            onClick={toggleTheme}
            aria-label={
              theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
            }
          >
            {theme === "dark" ? (
              <LightModeIcon className="theme-icon-pro" />
            ) : (
              <DarkModeIcon className="theme-icon-pro" />
            )}
          </button>

          {/* Language Switch */}
          <button className="lang-switch-pro">
            <span className="lang-active-pro">EN</span>
            <span className="lang-divider-pro">/</span>
            <span className="lang-option-pro">AR</span>
          </button>

          {/* CTA Button */}
          <button className="navbar-cta-pro">
            <span>Get Started</span>
            <ArrowForwardIcon className="cta-arrow-pro" />
          </button>

          {/* Mobile Menu Button */}
          <button
            className="menu-toggle-pro"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={toggleMenu}
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`mobile-menu-overlay ${menuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        ></div>

        {/* Mobile Menu */}
        <div className={`mobile-menu-pro ${menuOpen ? "active" : ""}`}>
          {/* Menu Header */}
          <div className="mobile-menu-header-pro">
            <a href="#" className="mobile-logo-pro" onClick={closeMenu}>
              <img
                src="/landing-page-demo/images/company-logo.svg"
                alt="TechFlow"
                className="logo-img-pro"
              />
              <span className="logo-text-pro">TechFlow</span>
            </a>
            <button
              className="mobile-close-pro"
              onClick={toggleMenu}
              aria-label="Close menu"
            >
              <CloseIcon />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="mobile-menu-nav-pro">
            {navLinks.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                className="mobile-link-pro"
                style={{ animationDelay: `${index * 0.05}s` }}
                onClick={closeMenu}
              >
                <span className="link-number-pro">0{index + 1}</span>
                <span className="link-text-pro">{link.label}</span>
                <ArrowForwardIcon className="link-arrow-pro" />
              </a>
            ))}
          </div>

          {/* Menu Footer */}
          <div className="mobile-menu-footer-pro">
            <button className="mobile-theme-toggle-pro" onClick={toggleTheme}>
              {theme === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
              <span>{theme === "dark" ? "Light Mode" : "Dark Mode"}</span>
            </button>

            <div className="mobile-lang-pro">
              <button className="lang-btn-pro active">EN</button>
              <span className="lang-sep-pro">/</span>
              <button className="lang-btn-pro">AR</button>
            </div>

            <button className="mobile-cta-pro">
              <span>Get Started</span>
              <ArrowForwardIcon className="cta-arrow-pro" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
