import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import CatPage from './CatPage';

class MyRow extends React.Component {
  render() {
    var rowStyle = {
      // color: "#6b6b6b",
      // fontWeight: "bold",
      // backgroundColor: "#d4d1d5",
      // borderBottom: "rgba(0, 0, 0, 0.05) 1px solid"
    };
    var thStyle = {
      //paddingLeft: "30px"
    };
    return(
      <tr style={rowStyle} className="table__row">
        
        <td style={thStyle} className="table--mobileHeader" data-label={"Product Id"}>{this.props.id}</td>
        <td style={thStyle} data-label={"Name"}>{this.props.name}</td>
        <td style={thStyle} data-label={"Category"}>{this.props.category}</td>
        <td style={thStyle} data-label={"Status"}>{this.props.status}</td>
        <td style={thStyle} data-label={"Price"}>{this.props.price}</td>
        <td><Link to={'/cats/' + '1'}>Show</Link></td>
      </tr>  
    );
  }
}

export default MyRow;
