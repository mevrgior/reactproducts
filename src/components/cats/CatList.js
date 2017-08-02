import React, {PropTypes} from 'react';
import CatListRow from './CatListRow';

const CatList = ({cats}) => {
  return (
    <table className="table main__block">
      <thead>
        <tr>
          <th className="table__th">Product ID</th>
          <th className="table__th">Name</th>
          <th className="table__th">Category</th>
          <th className="table__th">Price</th>
          <th className="table__th">Status</th>
          <th className="table__th">Actions</th>
        </tr>
      </thead>
      <tbody>
        {cats.map(cat => 
          <CatListRow key={cat.id} cat={cat} />
        )}
      </tbody>
    </table>
  );
};

CatList.propTypes = {
  cats: PropTypes.array.isRequired
};

export default CatList;