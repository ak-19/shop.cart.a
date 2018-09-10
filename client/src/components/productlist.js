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
        <div  className="container"  key={p._id} style={{marginTop: '10px'}}>
          <div className="row">
            <div className="col">{p.name}</div>
            <div className="col">Price: {p.price}</div>
            <div className="col">Year: {p.releaseYear}</div>
          </div>
          <div className="row">
            <div className="col-9"></div>
            <div className="col-3"><button type="button" className="btn btn-primary">Buy</button></div>
          </div>
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
        <div>
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
