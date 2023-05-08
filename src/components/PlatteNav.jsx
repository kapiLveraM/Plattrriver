import React, { useState } from "react";
import { Container, Nav, Row } from "react-bootstrap";

import PageLogo from "../assets/img/png/PageLogo.png";
// import PrimaryBtn from "./PrimaryBtn";

const PlatteNav = () => {
  const [nav, setnav] = useState(false);
  if (nav) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
  return (
    <div className="position-relative z_index_10 bg_green">
      <Nav className="py-3   ">
        <Container
        // data-aos="zoom-in"
        // data-aos-duration="1200"
        // data-aos-delay="3000"
        >
          <div className="d-flex justify-content-between align-items-center">
            <a href="#" className="d-inline-bloack page-logo">
              <img className="page-logo" src={PageLogo} alt="PageLogo" />
            </a>
            <ul className="ps-0 mb-0 list-unstyled d-none d-lg-flex gap-4 align-items-center">
              <li>
                <a
                  className="d-inline-block ff_ComicGecko fs_xsm fw-bold nav_links text_white z_index_10"
                  href="#Benefits"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="d-inline-block ff_ComicGecko fs_xsm fw-bold nav_links text_white z_index_10"
                  href="#Privacy"
                >
                  Campgrounds
                </a>
              </li>
              <li>
                <a
                  className="d-inline-block ff_ComicGecko fs_xsm fw-bold nav_links text_white z_index_10"
                  href="#Products"
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  className="d-inline-block ff_ComicGecko fs_xsm fw-bold nav_links text_white z_index_10"
                  href="#App"
                >
                  Contact
                </a>
              </li>
              <li className=" ms-5 ps-5">
                <a
                  className="d-inline-block sign_up_btn ff_ComicGecko fs_xsm fw-bold"
                  href="#Benefits"
                >
                  Sign Up
                </a>
              </li>
              <li>
                <a
                  className="d-inline-block sign_up_btn ff_ComicGecko fs_xsm fw-bold Login_btn"
                  href="#Benefits"
                >
                  Log in
                </a>
              </li>
            </ul>

            <button
              onClick={() => setnav(true)}
              className="bg-transparent border-0 d-lg-none menu position-relative"
            >
              <span className="line line1"></span>
              <span className="line line2"></span>
              <span className="line line3"></span>
            </button>
          </div>
          {/* responsive nav */}
          <div className={`${nav ? "show_nav" : "nav_hide"}`}>
            <div className="d-flex align-items-center gap-4 flex-column position-relative min-vh-100 w-100 justify-content-center d-lg-none">
              <button
                onClick={() => setnav(false)}
                className="btn btn-close btn-close-white fs-3 position-absolute top-0 end-0 mt-5 me-5"
              ></button>
              <ul className="ps-0 mb-0 list-unstyled d-flex flex-column gap-4 align-items-center">
                <li onClick={() => setnav(false)}>
                  <a
                    className="d-inline-block ff_ComicGecko fs_xsm fw-bold text_white "
                    href="#Benefits"
                  >
                    Home
                  </a>
                </li>
                <li onClick={() => setnav(false)}>
                  <a
                    className="d-inline-block ff_ComicGecko fs_xsm fw-bold text_white "
                    href="#Privacy"
                  >
                    Campgrounds
                  </a>
                </li>
                <li onClick={() => setnav(false)}>
                  <a
                    className="d-inline-block ff_ComicGecko fs_xsm fw-bold text_white "
                    href="#Products"
                  >
                    About us
                  </a>
                </li>
                <li onClick={() => setnav(false)}>
                  <a
                    className="d-inline-block ff_ComicGecko fs_xsm fw-bold text_white "
                    href="#App"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-block sign_up_btn ff_ComicGecko fs_xsm fw-bold"
                    href="#Benefits"
                  >
                    Sign Up
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-block sign_up_btn ff_ComicGecko fs_xsm fw-bold Login_btn"
                    href="#Benefits"
                  >
                    Log in
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </Nav>
    </div>
  );
};

export default PlatteNav;
