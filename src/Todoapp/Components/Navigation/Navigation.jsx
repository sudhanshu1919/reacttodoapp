import React from "react";
import { Link } from "react-router-dom";
import downarrow from "../../assets/images/down-arrow.png";
import { Style } from "@mui/icons-material";

function Navigation() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
          <a class="navbar-brand main-headding" href="#">
            Web Developer
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className={Style.BTN}>
              <img src={downarrow} width="22px" alt="Down" />
            </span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0 a-text">
              <li class="nav-item items">
                <Link to="/MainToDo">
                  <a class="nav-link" aria-current="page" href="#">
                    Write Todo List
                  </a>
                </Link>
              </li>

              <li class="nav-item items">
                <Link to="/Carousel">
                  <a class="nav-link" aria-current="page" href="#">
                    Gallery
                  </a>
                </Link>
              </li>

              <li class="nav-item items">
                <Link to="/InfoForm">
                  <a class="nav-link" aria-current="page" href="#">
                    Live Information
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navigation;
