import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { MdPets } from "react-icons/md";

export default function Navbar() {
  const { totals } = useCart();

  useEffect(() => {
    const menuToggle = document.getElementById("menuToggle");
    const mobilePanel = document.getElementById("mobilePanel");
    const searchToggle = document.getElementById("searchToggle");
    const searchPop = document.getElementById("searchPopover");
    const searchInput = document.getElementById("searchInput");
    const searchClose = document.getElementById("searchClose");
    const searchSubmit = document.getElementById("searchSubmit");

    const openSearch = () => {
      searchPop.classList.add("open");
      searchToggle.setAttribute("aria-expanded", "true");
      setTimeout(() => searchInput.focus(), 0);
    };
    const closeSearch = () => {
      searchPop.classList.remove("open");
      searchToggle.setAttribute("aria-expanded", "false");
      searchToggle.focus();
    };

    const openMenu = () => {
      mobilePanel.classList.add("open");
      menuToggle.setAttribute("aria-expanded", "true");
    };
    const closeMenu = () => {
      mobilePanel.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.focus();
    };

    menuToggle.addEventListener("click", () => {
      const isOpen = mobilePanel.classList.contains("open");
      isOpen ? closeMenu() : openMenu();
    });

    searchToggle.addEventListener("click", () => {
      const isOpen = searchPop.classList.contains("open");
      isOpen ? closeSearch() : openSearch();
    });

    searchSubmit.addEventListener("click", () => {
      const q = searchInput.value.trim();
      if (!q) {
        searchInput.focus();
        return;
      }
      alert("Tìm: " + q);
    });

    document.addEventListener("click", (e) => {
      if (searchPop.classList.contains("open")) {
        const withinSearch =
          searchPop.contains(e.target) || searchToggle.contains(e.target);
        if (!withinSearch) closeSearch();
      }
      if (mobilePanel.classList.contains("open")) {
        const withinMenu =
          mobilePanel.contains(e.target) || menuToggle.contains(e.target);
        if (!withinMenu) closeMenu();
      }
    });

    document.addEventListener("keydown", (e) => {
      const tag = document.activeElement?.tagName?.toLowerCase();
      const typing = tag === "input" || tag === "textarea";
      if (e.key === "/" && !typing) {
        e.preventDefault();
        if (!searchPop.classList.contains("open")) openSearch();
      }
      if (e.key === "Escape") {
        if (searchPop.classList.contains("open")) closeSearch();
        if (mobilePanel.classList.contains("open")) closeMenu();
      }
    });

    let lastW = window.innerWidth;
    window.addEventListener("resize", () => {
      const w = window.innerWidth;
      if (w !== lastW) {
        closeSearch();
        if (w >= 980) closeMenu();
        lastW = w;
      }
    });

    searchClose.addEventListener("click", closeSearch);

    // Account popup
    const accountBtn = document.getElementById("accountBtn");
    const accountPopup = document.getElementById("accountPopup");
    const closePopup = document.getElementById("closePopup");
    const loginForm = document.querySelector(".login-form");
    const registerForm = document.querySelector(".register-form");
    const showRegister = document.getElementById("showRegister");
    const showLogin = document.getElementById("showLogin");

    accountBtn.addEventListener("click", () => {
      accountPopup.style.display = "flex";
      loginForm.classList.add("active");
      registerForm.classList.remove("active");
    });

    closePopup.addEventListener("click", () => {
      accountPopup.style.display = "none";
    });

    showRegister.addEventListener("click", (e) => {
      e.preventDefault();
      loginForm.classList.remove("active");
      registerForm.classList.add("active");
    });

    showLogin.addEventListener("click", (e) => {
      e.preventDefault();
      registerForm.classList.remove("active");
      loginForm.classList.add("active");
    });

    window.addEventListener("click", (e) => {
      if (e.target === accountPopup) {
        accountPopup.style.display = "none";
      }
    });
  }, []);

  return (
      <div>
        <header className ="header">
          <nav className="navbar" aria-label="Thanh điều hướng">
            <div className="logo">
            <a href="/" aria-label="Trang chủ">
                <MdPets />
                <p>FurEver Care</p>
            </a>
            </div>

            <ul className="nav-links" role="menubar" aria-label="Liên kết chính">
                <li>
                  <Link to={"/"} role="menuitem" ariaCurrent="page">Home</Link>
                </li>
                <li>
                  <Link to="/about" role="menuitem">About</Link>
                </li>
                <li>
                  <Link to="/product" role="menuitem">Product</Link>
                </li>
                <li>
                  <Link to="/blog" role="menuitem">Pet Care</Link>
                </li>
                <li>
                  <Link to="/contact" role="menuitem">Contact</Link>
                </li>
            </ul>

            <div className="actions">
                <div className="search-wrap">
                    <button id="searchToggle" className="search-toggle" aria-haspopup="dialog" aria-expanded="false" aria-controls="searchPopover" title="Tìm kiếm ( / )">
                    <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                </div>
                
                <button id="accountBtn" className="btn" type="button">
                    <i className="fa-regular fa-user"></i>
                    <span>Sign in</span>
                </button>

                <div id="accountPopup" className="popup">
                    <div className="popup-content">
                      <span id="closePopup" className="close">&times;</span>

                      <form className="form login-form active">
                          <h2>Login</h2>
                          <input type="text" placeholder="Usename"/>
                          <input type="password" placeholder="Password"/>
                          <button type="submit">Login</button>
                          <p>Don't have an FurEver Care account ?<a href="#" id="showRegister">Register</a></p>
                      </form>

                      <form className="form register-form">
                          <h2>Register</h2>
                          <input type="text" placeholder="Usename"/>
                          <input type="email" placeholder="Email"/>
                          <input type="password" placeholder="Password"/>
                          <input type="password" placeholder="Re-enter password"/>
                          <button type="submit">Continue</button>
                          <p>Have an FurEver Care account ? <a href="#" id="showLogin">Sign in</a></p>
                      </form>
                    </div>
                </div>

                <Link to="/cart">
                  <button className="btn cart" type="button" aria-label="Giỏ hàng">
                    <i className="fa-solid fa-cart-shopping"></i>
                    <span className="cart-count">{totals.count}</span>
                  </button>
                </Link>

                <button id="menuToggle" className="menu-toggle" aria-label="Mở menu" aria-expanded="false" aria-controls="mobilePanel">
                    <i className="fa-solid fa-bars"></i>
                </button>
            </div>
          </nav>

          <div id="searchPopover" className="search-popover" role="dialog" aria-modal="true" aria-label="Search Product">
            <div className="search-row">
              <i className="fa-solid fa-magnifying-glass" aria-hidden="true"></i>
              <input id="searchInput" className="search-input" type="text" placeholder="Search product, news..." />
              <span className="kbd">/</span>
              <div className="search-actions">
                <button id="searchSubmit" className="btn" type="button">Search</button>
                <button id="searchClose" className="search-close" type="button" aria-label="Close">
                <i className="fa-solid fa-xmark"></i>
                </button>
              </div>
            </div>
          </div>

          <div id="mobilePanel" className="mobile-panel" aria-label="Menu di động">
              <ul className="mobile-links">
                <li>
                  <Link to={"/"} role="menuitem" ariaCurrent="page">Homepage</Link>
                </li>
                <li>
                  <Link to="/about" role="menuitem">About</Link>
                </li>
                <li>
                  <Link to="/product" role="menuitem">Product</Link>
                </li>
                <li>
                  <Link to="/blog" role="menuitem">News</Link>
                </li>
                <li>
                  <Link to="/contact" role="menuitem">Contact</Link>
                </li>
              </ul>
              <div className="mobile-cta">
                  <button className="btn" type="button">Sign in</button>
                  <button className="btn" type="button" style={{ background: "#fff8f0" }}>Register</button>
              </div>
          </div>
        </header>
      </div>
  );
}
