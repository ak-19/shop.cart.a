import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getProducts} from '../state/actions/product';
import Product from './product';
import AddProduct from './addproduct';

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
        <div className="row">
          <AddProduct  className="col-12 col-md-6"/>
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
