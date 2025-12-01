import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import "./navbar.css";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  //Links
  const navLinks = [
    { label: "HOME" },
    { label: "SERVICES" },
    { label: "ABOUT" },
    { label: "CONTACT" },
    { label: "FAQ" },
  ];

  return (
    <>
      <div className="navContainer w-full flex justify-between space-x-20 rounded-2xl p-3 border-2 relative items-center">
        {/* logo */}
        <div className="text-2xl">
          <a href="#" className="btn-shine">
            Diaa Elkhouly
          </a>
        </div>

        {/* main links  */}
        <div className="hidden md:flex space-x-12 align-baseline">
          {navLinks.map((link) => (
            <button key={link.label} className="link-btn m-2">
              <span className="actual-text">&nbsp;{link.label}&nbsp;</span>
              <span aria-hidden="true" className="hover-text">
                &nbsp;{link.label}&nbsp;
              </span>
            </button>
          ))}
        </div>
        {/* lang btn */}
        <div>
          <button className="trans-lang">
            AR
          </button>
        </div>

        {/* menu icon */}
        <div className="block md:hidden ">
          <button
            className="menu-icon "
            aria-label="open menu"
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}
          >
            <MenuIcon />
          </button>
        </div>
        {/* menu list */}
        {menuOpen && (
          <div className="mobileMenu block md:hidden absolute top-full right-0 mt-1 p-4 rounded shadow-lg z-30">
            {navLinks.map((link) => (
              <button
                key={link.label}
                className="link-btn block w-full mb-2 "
                onClick={() => setTimeout(() => setMenuOpen(false), 1000)}
              >
                <span className="actual-text">&nbsp;{link.label}&nbsp;</span>
                <span aria-hidden="true" className="hover-text">
                  &nbsp;{link.label}&nbsp;
                </span>
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
