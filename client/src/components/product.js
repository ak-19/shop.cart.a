import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addItemToCart} from '../state/actions/cart';

class Product extends Component {
  addItemToCart(e){
    const {_id: id, name, price} = this.props;
    this.props.addItemToCart({id, name, price});
  }
  render () {
    const {name, price, description} = this.props;
    return (
      <div className="card card-body bg-light">
        <h3 className="card-title">{name}</h3>
        <p>{description}</p>
        <h6>${price}</h6>
        <button type="button"
                className="btn btn-primary col-3"
                onClick={e => this.addItemToCart(e)}
                >Add item</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  cartHandler: state.cartReducer
});

export default connect(mapStateToProps, {addItemToCart})(Product);
