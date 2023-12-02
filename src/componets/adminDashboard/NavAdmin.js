/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";

function NavAdmin() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isNavbarTransparent, setIsNavbarTransparent] = useState(true);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;

    // Set the transparency based on the scroll position
    setIsNavbarTransparent(scrollPosition < 100);
  };

  const displayMenuBar = () => {
    const menuBar = document.getElementById("menuBar");
    const lists = document.getElementById("lists");

    if (isSmallScreen) {
      menuBar.style.display = "block";
      lists.style.display = "none";
    } else {
      menuBar.style.display = "none";
      lists.style.display = "block";
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 88.438 * 16);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    displayMenuBar();
  }, [isSmallScreen]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const titleColor = {
    color: "#03a696",
    fontSize: "1.5rem",
    fontWeight: "bold",
  };
  const customPadding = {
    paddingLeft: "4rem",
  };
  const customPadding2 = {
    marginLeft: "2.8rem",
  };

  return (
    <div>
      <nav
        class={`navbar navbar-dark  fixed-top ${
          isNavbarTransparent ? "" : ""
        }`}
      >
        <div class="container-fluid">
          <a class="navbar-brand text-success flex_custom" href="#">
            <div class="logo"></div>
            <div class="alignSelf_custom">
              <h2 style={titleColor}>GOODWILL</h2>
            </div>
          </a>
          <div id="lists">
            <ul class="navbar-nav flex-row justify-content-end">
              <li class="nav-item">
                <a
                  class="nav-link text-success paddingR_custom paddingL_custom font_custom "
                  aria-current="page"
                  href="#"
                >
                  <i className="fa fa-dashboard"></i>&nbsp; DashBoard
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link btn text-success paddingR_custom font_custom cursor-pointer "
                  href="#"
                >
                  <i class="fas fa-sign-out-alt"></i>&nbsp; Sign Out
                </a>
              </li>
            </ul>
          </div>
          <div id="menuBar">
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasDarkNavbar"
              aria-controls="offcanvasDarkNavbar"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
          </div>
          <div
            class="offcanvas offcanvas-end text-bg-dark"
            tabindex="-1"
            id="offcanvasDarkNavbar"
            aria-labelledby="offcanvasDarkNavbarLabel"
          >
            <button
              type="button"
              class="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
            <div class="offcanvas-header">
              <a class="navbar-brand text-success" href="#">
                <div style={customPadding}>
                  <div class="logoAtVertNav" style={customPadding2}></div>
                  <div class="alignSelf_custom p-5">
                    <h2 style={titleColor}>GOODWILL</h2>
                  </div>
                </div>
              </a>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="nav-item">
                  <a
                    class="nav-link text-success font_custom p-4"
                    aria-current="page"
                    href="#"
                  >
                    <center>
                      <i class="fa fa-home"></i>&nbsp;Home
                    </center>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-success font_custom p-4" href="#">
                    <center>
                      <i className="fa fa-dashboard"></i>&nbsp; DashBoard
                    </center>
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link btn text-success paddingR_custom font_custom cursor-pointer p-4"
                    href="#"
                  >
                    <i class="fas fa-sign-out-alt"></i>&nbsp; Sign Out
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavAdmin;
