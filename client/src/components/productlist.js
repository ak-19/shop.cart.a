import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getProducts} from '../state/actions/product';
import Product from './product';

class ProductList extends Component {
  componentDidMount(){
    this.props.getProducts();
  }
  renderProducts(){
    return this.props.productProvider.products.map(p => <Product key={p._id} className="col" {...p}/>);
  }
  render () {
    if(this.props.productProvider.loading){
      return (
        <div>
          ...loading data
        </div>
      );
    }

    return (
      <div className="container">
        <div className="card-deck mb-3 text-center">
          {this.renderProducts()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  productProvider: state.productsReducer
});

export default connect(mapStateToProps, {getProducts})(ProductList);
