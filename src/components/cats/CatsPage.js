import React, {PropTypes} from 'react';
import {Link, browserHistory} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import CatList from './CatList';
import NewCatPage from './NewCatPage';
import MyRow from './MyRow';

class CatsPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  _getProducts() {
    const productList = [
      {id:1, name: 'Product1', category: 'first class', status: 'active', price: '999.00 €' },
      {id:2, name: 'Product2', category: 'second class', status: 'active', price: '666.00 €' },
      {id:3, name: 'Product2', category: 'second class', status: 'active', price: '666.00 €' },
      {id:4, name: 'Product2', category: 'second class', status: 'active', price: '666.00 €' },
      {id:5, name: 'Product2', category: 'second class', status: 'active', price: '666.00 €' },
      {id:6, name: 'Product2', category: 'second class', status: 'active', price: '666.00 €' }
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
    
    const tableStyle = {
      borderCollapse: "collapse"
    };
    const thStyle = {
      // paddingLeft: "30px",
      // textAlign: "left",
      // backgroundColor: "#63acb7",
      // color: "#f6f3f7",
      // fontWeight: "bold",
      // fontSize: "0.7em",
      // textTransform: "uppercase",
      // height: "30px"
    };
    const linkButton = {
      textAlign: "center",
      height: "30px",
      textTransform: "uppercase",
      padding: "10px 5px 5px"
    };

    return (
      <div className="main">
        <h1 className="main__title">Product List</h1>
        <div className="main__block">
          <Link to={'/cats/new'} style={linkButton} className="button">Add cat and soon product</Link>
          <CatList cats={cats} /> 
        </div>
        <table className="table main__block" style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle} className="table__th">Product ID</th>
              <th style={thStyle} className="table__th">Name</th>
              <th style={thStyle} className="table__th">Category</th>
              <th style={thStyle} className="table__th">Status</th>
              <th style={thStyle} className="table__th">Price</th>
              <th style={thStyle} className="table__th">Actions</th>
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





