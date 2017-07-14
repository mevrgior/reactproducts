import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import CatPage from './CatPage';

const ProductListRow = ({product}) => {
  
  _getProducts() {
    const productList = [
      {id:1, name: 'Product1', category: 'first class', status: 'active', price: '999.00 €' },
      {id:2, name: 'Product2', category: 'second class', status: 'active', price: '666.00 €' }
    ];
    return productList.map((product) => {
      return (
        <Poduct
          name={product.name} category={product.category} key={product.id}
        />
      );
    });
    
  }

  return (
    <tr>
      {/* <td><Link to={'/cats/' + cat.id}>{cat.name}</Link></td> */}
      <Product/>
    </tr>
  );
};

ProductListRow.propTypes = {
  product: PropTypes.object.isRequired
};

export default ProductListRow;
