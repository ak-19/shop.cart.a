import React, {Component} from 'react';

class Product extends Component {
  render () {
    const {name, price, description} = this.props;
    return (
      <div className="card card-body bg-light">
        <div className="row">
          <div className="col-12">
            <h3 className="card-title">{name}</h3>
            <p>{description}</p>
            <h6>${price}</h6>
            <button type="button" className="btn btn-primary">Buy</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Product;
