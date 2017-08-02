import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import CatPage from './CatPage';

const CatListRow = ({cat}) => {
  return (
    <tr className="table__row">
      <td className="table--mobileHeader" data-label={"Product Id"}>{cat.id}</td>
      <td data-label={"Name"}><Link to={'/cats/' + cat.id}>{cat.name}</Link></td>
      <td data-label={"Category"}>{cat.category}</td>
      <td data-label={"Price"}>{cat.price}</td>
      <td data-label={"Status"} >{cat.status}</td>
      <td><Link to={'/cats/' + cat.id}>Show</Link></td>
    </tr>
  );
};

CatListRow.propTypes = {
  cat: PropTypes.object.isRequired
};

export default CatListRow;
