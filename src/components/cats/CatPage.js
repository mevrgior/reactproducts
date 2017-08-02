import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as catActions from '../../actions/catActions';
import HobbyList from '../hobbies/HobbyList';
import CatForm from './CatForm';
import {browserHistory} from 'react-router';
// import toastr from 'toastr'; 

class CatPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      cat: Object.assign({}, this.props.cat), 
      //catHobbies: Object.assign([], [...this.props.catHobbies]),
      //checkBoxHobbies: Object.assign([], [...this.props.checkBoxHobbies]),
      saving: false,
      isEditing: false
    };
    this.saveCat = this.saveCat.bind(this);
    this.updateCatState = this.updateCatState.bind(this);
    //this.updateCatHobbies = this.updateCatHobbies.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.deleteCat = this.deleteCat.bind(this);
    this.redirect = this.redirect.bind(this);
  }


  componentWillReceiveProps(nextProps) {
    if (this.props.cat.id != nextProps.cat.id) {
      this.setState({cat: Object.assign({}, nextProps.cat)});
    }
    
    // if (this.props.checkBoxHobbies.length < nextProps.checkBoxHobbies.length) {
    //   this.setState({catHobbies: [...nextProps.catHobbies], checkBoxHobbies: [...nextProps.checkBoxHobbies]});
    // }

    this.setState({saving: false, isEditing: false});
  }

  toggleEdit() {
    this.setState({isEditing: true});
  }

  // updateCatHobbies(event) {
  //   const cat = this.state.cat;
  //   const hobbyId = event.target.value;
  //   const hobby = this.state.checkBoxHobbies.filter(hobby => hobby.id == hobbyId)[0];
  //   const checked = !hobby.checked;
  //   hobby['checked'] = !hobby.checked;
  //   if (checked) {
  //     cat.hobby_ids.push(hobby.id);
  //   } else {  
  //     cat.hobby_ids.splice(cat.hobby_ids.indexOf(hobby.id));
  //   }
  //   this.setState({cat: cat});

  // }

  updateCatState(event) {
    const field = event.target.name;
    const cat = this.state.cat;
    cat[field] = event.target.value;
    return this.setState({cat: cat});
  }

  saveCat(event) {
    event.preventDefault();
    this.setState({saving: true});
    this.props.actions.updateCat(this.state.cat);

  } 

  deleteCat(event) {
    this.props.actions.deleteCat(this.state.cat);
  }

  redirect() {
    browserHistory.push('/cats');
  }

  render() {
    if (this.state.isEditing) {
      return (
      <div className="main__block__form">
        <h1>edit cat</h1>
        <CatForm 
          cat={this.state.cat} 
          //hobbies={this.state.checkBoxHobbies}
          onSave={this.saveCat} 
          onChange={this.updateCatState} 
          //onHobbyChange={this.updateCatHobbies}
          saving={this.state.saving}/> 
      </div>
      );
    }
    console.log("ARGG: "+ JSON.stringify(this.props.cat));
    return (
      <div className="main__block__form">
        <h1>Name: {this.state.cat.name}</h1>
        <p className="item-details" >ID: {this.state.cat.id}</p>
        <p className="item-details" >Category: {this.state.cat.category}</p>
        <p className="item-details" >Price: {this.state.cat.price}</p>
        <p className="item-details" >Status: {this.state.cat.status}</p>
        <p className="item-details" >Breed: {this.state.cat.breed}</p>
        <p className="item-details">Weight: {this.state.cat.weight}</p>
        <p className="item-details">Temperament: {this.state.cat.temperament}</p>
         {/* <HobbyList hobbies={this.state.catHobbies} />  */}
        <button onClick={this.toggleEdit} className="mybutton">edit</button>
        <button onClick={this.deleteCat} className="mybutton">delete</button>
      </div>
    );
  }
}


CatPage.propTypes = {
  cat: PropTypes.object.isRequired,
  // catHobbies: PropTypes.array.isRequired,
  // checkBoxHobbies: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function getCatById(cats, id) {
  let cat = cats.find(cat => cat.id == id);
  return Object.assign({}, cat);
}

// function hobbiesForCheckBoxes(hobbies, cat=null) {
//   return hobbies.map(hobby => {
//     if (cat && cat.hobby_ids.filter(hobbyId => hobbyId == hobby.id).length > 0) {
//       hobby['checked'] = true;
//     } else {
//       hobby['checked'] = false;
//     }
//     return hobby;
//   });
// }

// function collectCatHobbies(hobbies, cat) {
//   let selected = hobbies.map(hobby => {
//     if (cat.hobby_ids.filter(hobbyId => hobbyId == hobby.id).length > 0) {
//       return hobby;
//     }
//   });
//   return selected.filter(el => el != undefined);
// }

function mapStateToProps(state, ownProps) {
  //const stateHobbies = Object.assign([], state.hobbies);
  //let checkBoxHobbies = [];
  //let catHobbies = [];
  let cat = {name: '', category: '', price: '', status: '', breed: '', weight: '', temperament: ''};
  const catId = ownProps.params.id;
  if (catId && state.cats.length > 0) {
    cat = getCatById(state.cats, ownProps.params.id);
    if (cat.id > 0) {
      //checkBoxHobbies = hobbiesForCheckBoxes(stateHobbies, cat);
      //catHobbies = collectCatHobbies(stateHobbies, cat);
    } else {
      //checkBoxHobbies = hobbiesForCheckBoxes(stateHobbies);
    }
  } 
    return {cat: cat};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(catActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(CatPage);







