import React, {Component} from 'react';

class Navbar extends Component {
  render () {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/">Home</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="/wfilter">Products</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/add">
                Add product
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/delete">
                Delete product
              </a>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                  <a className="nav-link" href="/cart">Your cart<span className="badge badge-secondary">5</span></a>
              </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navbar;
