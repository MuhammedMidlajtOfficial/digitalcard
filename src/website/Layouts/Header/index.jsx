import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./header.css";
import { FaArrowRight, FaPhone } from "react-icons/fa6";
import logoIcon from "../../Assets/image/logo.png";
import { FaRegUserCircle } from "react-icons/fa";

const Header = () => {
  const navigate = useNavigate();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHomeInitiallyActive, setIsHomeInitiallyActive] = useState(true);
  const location = useLocation();

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (location.pathname !== "/") {
      setIsHomeInitiallyActive(false);
    }
  }, [location]);

  const isActive = (path) => {
    if (path === "/" && location.pathname === "/" && isHomeInitiallyActive) {
      return true;
    }
    return location.pathname === path;
  };

  return (
    <>
      <div className="container">
        <header className={`header ${isScrolled ? "scrolled" : ""}`}>
          <nav className="navbar navbar-expand-lg">
            <div className="container">
              <a className="navbar-brand" href="/">
                <img src={logoIcon} alt="Logo" className="logo-icon" />
                {/* <span className="brand-text">Diskuss</span>  */}
              </a>

              <button
                className={`navbar-toggler ${isNavOpen ? "open" : ""}`}
                type="button"
                onClick={toggleNav}
                aria-label="Toggle navigation"
              >
                {isNavOpen ? (
                  <span className="close-icon">✖</span>
                ) : (
                  <>
                    <span></span>
                    <span></span>
                    <span></span>
                  </>
                )}
              </button>
              <div
                className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`}
                id="navbarNav"
              >
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link
                      className={`nav-link ${isActive("/") ? "active-link" : ""}`}
                      to="/"
                      onClick={toggleNav}
                    >
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={`nav-link ${isActive("/features") ? "active-link" : ""
                        }`}
                      to="/features"
                      onClick={toggleNav}
                    >
                      Features
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={`nav-link ${isActive("/pricing") ? "active-link" : ""
                        }`}
                      to="/pricing"
                      onClick={toggleNav}
                    >
                      Pricing
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      className={`nav-link ${isActive("/resources") ? "active-link" : ""
                        }`}
                      to="/resources"
                      onClick={toggleNav}
                    >
                      Resources Pages
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      className={`nav-link ${isActive("/about-us") ? "active-link" : ""
                        }`}
                      to="/about-us"
                      onClick={toggleNav}
                    >
                      About Us
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      className={`nav-link ${isActive("/contact") ? "active-link" : ""
                        }`}
                      to="/contact"
                      onClick={toggleNav}
                    >
                      Contact
                    </Link>
                  </li>

                  <div className="display-mobile">
                    <div className="header-btn-links">
                      <Link to="/">Download App</Link> &nbsp; | &nbsp;
                      <Link to="/contact">Book Demo</Link>
                      &nbsp;&nbsp;
                    </div>

                    <button
                      className="btn btn-primary get-started-btn d-none d-lg-inline-block"
                      onClick={() => navigate("/login")}
                    >
                      Get started <FaArrowRight />
                    </button>
                  </div>
                </ul>
              </div>

              <div className="desktop-display">
                <button
                  className="btn btn-primary header-get-started-btn d-none d-lg-inline-block"
                  onClick={() => navigate("/login")}
                >
                  <FaArrowRight /> Get started
                </button>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <div className="header-btn-links">
                  <Link to="/contact"><FaPhone style={{fontSize:"16px"}}/> Book Demo</Link>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <Link to="/"><FaRegUserCircle style={{fontSize:"30px", color:"var(--black-text-color"}}/></Link>
                </div>
              </div>
            </div>
          </nav>
        </header>
      </div>
    </>
  );
};

export default Header;
