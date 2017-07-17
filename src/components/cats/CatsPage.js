import React, {PropTypes} from 'react';
import {Link, browserHistory} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import CatList from './CatList';
import NewCatPage from './NewCatPage';

class MyRow extends React.Component {
  render() {
    var rowStyle = {
      backgroundColor: "red",
      height: "50px",
      color: "#6b6b6b",
      fontWeight: "bold",
      backgroundColor: "#d4d1d5",
      borderBottom: "rgba(0, 0, 0, 0.05) 1px solid"
    };
    var thStyle = {
      paddingLeft: "30px"
    };
    return(
      <tr style={rowStyle}>
        <td style={thStyle}>{this.props.id}</td>
        <td style={thStyle}>{this.props.name}</td>
        <td style={thStyle}>{this.props.category}</td>
        <td style={thStyle}>{this.props.status}</td>
        <td style={thStyle}>{this.props.price}</td>
      </tr>  
    );
  }
}

class CatsPage extends React.Component {
  constructor(props, context) {
    super(props, context);
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

  render() {
    const cats = this.props.cats;
    const enterrow = this._getProducts();
    
    var tableStyle = {
      boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
      borderCollapse: "collapse"
    };
    var thStyle = {
      paddingLeft: "30px",
      textAlign: "left",
      backgroundColor: "#63acb7",
      color: "#f6f3f7",
      fontWeight: "bold",
      fontSize: "0.7em",
      textTransform: "uppercase",
      height: "30px"
    };

    return (
      <div className="main">
        <h1 className="main__title">Product List</h1>
        <div className="main__block">
          <Link to={'/cats/new'} className="btn btn-primary">+ cat</Link>
          <CatList cats={cats} /> 
        </div>
        <table className="table main__block" style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle} className="col">Product ID</th>
              <th style={thStyle} className="col">Name</th>
              <th style={thStyle} className="col">Category</th>
              <th style={thStyle} className="col">Status</th>
              <th style={thStyle} className="col">Price</th>
            </tr>
          </thead>
          <tbody>
            {enterrow}
          </tbody>
        </table>
        <div className="main__block">
          {this.props.children}
        </div>
      </div>
    );
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





