import React from "react";


const handleChangeInput = (event) => {
  console.log(event.target.value);
  
}


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Mavi Duru Input Chart
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Ana Sayfa
              </a>
            </li>
            
            
            <li className="nav-item">
              <a className="nav-link" aria-disabled="true">
                Tüm Girişler
              </a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Giriş Ara"
              aria-label="Search"
              onChange={(e) => handleChangeInput(e)} 
            />
            <button className="btn btn-outline-success" type="submit">
              Ara
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
