import React, { Component } from 'react'

class ProductList extends Component {
  render() {
      if (this.props.products == null || this.props.products.length === 0) {
        return <h5 className="p-2">No Products</h5>
      }

      // maps products to be displayed as badge
    
    return this.props.products.map(p =>
    <div className="card m-1 p-1 bg-light" key={p.id}>
        <h4>
          {p.name}
            <span className="badge badge-pill badge-primary float-right">
            ${p.price.toFixed(2)}
            </span>
        </h4>

        <div className="card-text bg-white p-1">
          {p.description}
          <button className="btn btn-success btn-sm float-right" onClick={ () => this.props.addToCart(p)}>
            Add To Cart          
          </button>
        </div>
        
      </div>
    )
  }
}

export default ProductList

// responsile for displaying the list of products 
// whose details are received through a prop named product