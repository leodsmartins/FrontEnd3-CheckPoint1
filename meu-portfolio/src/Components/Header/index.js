/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/style-prop-object */

import "./style.scss";

const Header = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <a class="navbar-brand" href="#banner-container">
        Meu Portfolio
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Alterna navegação"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse justify-content-center"
        id="navbarNav"
      >
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="#hello-about">
              Sobre <span class="sr-only"></span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#skills-container">
              Skills
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#project-container">
              Projetos
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#footer-container">
              Contatos
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
