/**
 * Footer Component - Professional Redesign
 */

import { footerData, copyright, socialLinks } from "../../data";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import "./Footer.css";

// Social icon mapping
const socialIconMap = {
  twitter: TwitterIcon,
  linkedin: LinkedInIcon,
  github: GitHubIcon,
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-pro">
      {/* Background Effects */}
      <div className="footer-bg-pro"></div>
      <div className="footer-glow-pro"></div>

      <div className="footer-container-pro">
        {/* Footer Top */}
        <div className="footer-top-pro">
          <div className="footer-brand-pro">
            <a href="#" className="footer-logo-pro">
              <img
                src="/landing-page-demo/images/company-logo.svg"
                alt="TechFlow"
                className="footer-logo-img-pro"
              />
              <span>TechFlow</span>
            </a>
            <p className="footer-tagline-pro">
              Empowering product teams with AI-driven tools for the modern
              workflow.
            </p>
            <div className="footer-social-pro">
              {socialLinks.map((social, index) => {
                const IconComponent = socialIconMap[social.icon];
                return (
                  <a
                    key={index}
                    href={social.url}
                    className="social-link-pro"
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {IconComponent && <IconComponent />}
                  </a>
                );
              })}
            </div>
          </div>

          <div className="footer-links-pro">
            {Object.entries(footerData).map(([section, links]) => (
              <div key={section} className="footer-column-pro">
                <h4 className="footer-heading-pro">{section}</h4>
                <ul className="footer-list-pro">
                  {links.map((link, index) => (
                    <li key={index}>
                      <a href="#" className="footer-link-pro">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom-pro">
          <div className="footer-copyright-pro">
            <span>
              © {currentYear} {copyright.company}. All rights reserved.
            </span>
          </div>
          <div className="footer-legal-pro">
            <a href="#" className="legal-link-pro">
              {copyright.terms}
            </a>
            <a href="#" className="legal-link-pro">
              Privacy Policy
            </a>
            <a href="#" className="legal-link-pro">
              Cookie Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
