import React, {PropTypes} from 'react';
import ProductListRowRow from './ProducListRow';

const ProducList = ({products}) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {products.map(product => 
          <ProducListRow key={product.id} product={product} />
        )}
      </tbody>
    </table>
  );
};

ProducList.propTypes = {
  products: PropTypes.array.isRequired
};

export default ProducList;