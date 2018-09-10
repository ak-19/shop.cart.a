import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getProducts} from '../state/actions/product';

class ProductList extends Component {
  componentDidMount(){
    this.props.getProducts();
  }
  renderProducts(){
    return this.props.productProvider.products.map(p => {
      return (
        <div key={p._id}>
          {p.name} - Price: {p.price}
        </div>
      )
    })
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
      <div>
        {this.renderProducts()}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  productProvider: state.productsReducer
});

export default connect(mapStateToProps, {getProducts})(ProductList);
