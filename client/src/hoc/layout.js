import React from 'react';
import Footer from '../partialcomponents/footer';
class Layout extends React.Component {
  render () {
    return  (
      <div>
        {this.props.children}
        <Footer/>
      </div>
    )
  }
}

export default Layout;
