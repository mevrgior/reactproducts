import React, {PropTypes} from 'react';
import {Link, browserHistory} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import CatList from './CatList';
import NewCatPage from './NewCatPage';

class MyRow extends React.Component {
  render() {
    return(
      <tr>
        <td>{this.props.id}</td>
        <td>{this.props.name}</td>
        <td>{this.props.category}</td>
        <td>{this.props.status}</td>
        <td>{this.props.price}</td>
      </tr>  
    );
  }
}

class CatsPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const cats = this.props.cats;
    const mylist = ['dsa', 'asdsd', 'hgfjkl'];
    const enterrow = this._getProducts();
    return (
      <div className="col-md-12">
        <h1>Cats <Link to={'/cats/new'} className="btn btn-primary">+ cat</Link></h1>
        <div className="col-md-4">
          <CatList cats={cats} />
        </div>
        <table className="table">
        <thead>
          <tr>
            <th className="col">Product ID</th>
            <th className="col">Name</th>
            <th className="col">Category</th>
            <th className="col">Status</th>
            <th className="col">Price</th>
          </tr>
        </thead>
        <tbody>
          {/* <tr>
            {mylist.map(myitem => <td>{myitem}</td>)}
          </tr> */} 
            {enterrow}
          {/* <ProductList products={product} /> */}
        </tbody>
      </table>
        <div className="col-md-8">
          {this.props.children}
        </div>
      </div>
    );
  }
  _getProducts() {
    const productList = [
      {id:1, name: 'Product1', category: 'first class', status: 'active', price: '999.00 €' },
      {id:2, name: 'Product2', category: 'second class', status: 'active', price: '666.00 €' }
    ];
    return productList.map((product) => {
      return (
        <MyRow
          id={product.id} name={product.name} category={product.category} status={product.status} price={product.price} key={product.id}
        />
      );
    });
  }
}

CatsPage.propTypes = {
  cats: PropTypes.array.isRequired,
  children: PropTypes.object
};

function mapStateToProps(state, ownProps) {
  return {
    cats: state.cats
  };
}

export default connect(mapStateToProps)(CatsPage);





