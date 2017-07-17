import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
  render() {
    const homeButton = {
      textAlign: "center",
      height: "30px",
      textTransform: "uppercase",
      padding: "10px 5px 5px",
      margin: "0",
    };
    return (
      <div className="main">
        <div className="main__block">
          <h1 className="main__title">Converting cats into products</h1>
          <p>To create a page with the given requirements i follwoed along a tutorial showing a list of cats from a given API and editing them. </p>
          <p>So far i have not managed to make the data integration into React/Redux items from the API work and make the items editable.</p>
          <p>I did however make the frontend and interface look a but nicer.</p>
          <p>My next steps would be:
            <ul>
              <li> create components for the editforms and showpage for the products </li>
              <li> try to use the API products instead of a "const = producList" in the CatsPage </li>
            </ul>  
          </p>
          <Link to='/cats' style={homeButton} className="button">take a look</Link>
        </div>
      </div>
    );
  }
}

export default HomePage;